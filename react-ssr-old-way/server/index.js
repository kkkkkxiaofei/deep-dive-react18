import "dotenv/config";
import path from "path";
import fs from "fs";
import express from "express";
import App from "../src/App";
import { getRepos } from "./api";
import APIRouter from "./router/APIRouter";
import React from "react";
import ReactDOMServer from "react-dom/server";

const getServerData = async () => {
  // simulating slow request
  await sleep(3000);
  const repos = await getRepos();
  const data = {
    repos,
    selectedRepo: repos[0],
  };
  return data;
};

const sleep = async (millseconds) =>
  new Promise((resolve) => setTimeout(resolve, millseconds));

const PORT = process.env.PORT || 3006;
const app = express();

// simulating get big chunks from complex components
app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    setTimeout(next, 3000);
  } else {
    next();
  }
});

app.get("/", async (req, res) => {
  console.time("server side rendering");
  const data = await getServerData();
  const app = ReactDOMServer.renderToString(<App data={data} />);
  console.timeEnd("server side rendering");
  const indexFile = path.resolve("./build/index.html");
  try {
    const template = fs.readFileSync(indexFile, "utf8");
    res.send(
      template.replace(
        '<div id="root"></div>',
        `<script>window.__INIT_CONTEXT__ = ${JSON.stringify(data)}</script>
        <div id="root">${app}</div>`
      )
    );
  } catch (e) {
    res.status(500).send("Failed to read html template!");
  }
});

app.use(express.static("./build"));

app.use("/api", APIRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});