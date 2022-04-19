import "dotenv/config";
import path from "path";
import fs from "fs";
import express from "express";
import App from "../src/App";
import { getMetrics, getRepos } from "./api";
import APIRouter from "./router/APIRouter";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";

const wrapRequest = (_fetch) => {
  let done = false;
  let promise = null;

  return {
    read(...params) {
      console.log("=======_fetch0========");
      if (promise) {
        throw promise;
      }

      if (done) {
        return;
      }
      promise = new Promise((resolve) =>
        // simulating slow request
        setTimeout(() => {
          console.log("=======_fetch1========");
          _fetch(params).then((data) => {
            console.log("=======_fetch2========");
            done = true;
            promise = null;
            resolve(data);
          });
        }, 0)
      );
      throw promise;
    },
  };
};

const getServerData = () => ({
  repos: wrapRequest(getRepos),
  metrics: wrapRequest(getMetrics),
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
  const data = getServerData();
  const { pipe, abort } = renderToPipeableStream(<App data={data} />, {
    bootstrapScripts: ["/static/js/main.70cb0e0f.js"],
    onCompleteShell() {
      // If something errored before we started streaming, we set the error code appropriately.
      res.statusCode = didError ? 500 : 200;
      res.setHeader("Content-type", "text/html");
      pipe(res);
    },
    onError(x) {
      didError = true;
      console.error(x);
    },
  });
  // setTimeout(abort, 1000);
});

app.use(express.static("./build"));

app.use("/api", APIRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});