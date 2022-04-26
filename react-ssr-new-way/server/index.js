import "dotenv/config";
import path from "path";
import fs from "fs";
import express from "express";
import App from "../src/App";
import { getMetrics, getRepos } from "./api";
import APIRouter from "./router/APIRouter";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { DataProvider } from "../src/context/DataContext";
import babelRegister from "@babel/register"; 

babelRegister({
  ignore: [/[\\\/](build|server\/server|node_modules)[\\\/]/],
  presets: [["react-app", { runtime: "automatic" }]],
  plugins: ["@babel/transform-modules-commonjs"],
});

const PORT = process.env.PORT || 3006;
const app = express();

// simulating get big chunks from complex components
app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    setTimeout(next, 0);
  } else {
    next();
  }
});

app.get("/", async (req, res) => {
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  let didError = false;
  const serverData = {
    repos: wrapPromise(getRepos, (data) => {
      res.write(`
        <script>
          repos = ${JSON.stringify(data)};
        </script>
      `);
    }),
    metrics: wrapPromise(getMetrics, (data) => {
      res.write(`
        <script>
          metrics = ${JSON.stringify(data)};
        </script>
      `);
    }),
  };
  const { pipe, abort } = renderToPipeableStream(
    <DataProvider data={serverData}>
      <App />
    </DataProvider>,
    {
      bootstrapScripts: ["./main.js"],
      onCompleteShell() {
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError(...args) {
        console.log(args, '------');
      },
      onError(x) {
        didError = true;
        console.error(x);
      },
    }
  );
  // setTimeout(abort, 1000);
});

app.use(express.static("./build"));

app.use("/api", APIRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

function wrapPromise(startFetch, callback) {
  let done = false;
  let promise = null;
  let result = null;
  return {
    read(...params) {
      if (done) {
        return result;
      }
      if (promise) {
        throw promise;
      }
      promise = startFetch(params).then((repos) => {
        done = true;
        promise = null;
        result = repos;
        callback(repos);
      });
      throw promise;
    },
  };
}