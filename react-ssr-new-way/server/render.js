/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from "react";
// import {renderToString} from 'react-dom/server';
import { renderToPipeableStream } from "react-dom/server";
import App from "../src/App";
import { DataProvider } from "../src/data";
import { API_DELAY, ABORT_DELAY } from "./delays";
import { getRepos, getMetrics } from "./api";

// In a real setup, you'd read it from webpack build stats.
let assets = {
  "main.js": "/main.js",
  "main.css": "/main.css"
};

module.exports = function render(url, res) {
  // This is how you would wire it up previously:
  //
  // res.send(
  //   '<!DOCTYPE html>' +
  //   renderToString(
  //     <DataProvider data={data}>
  //       <App assets={assets} />
  //     </DataProvider>,
  //   )
  // );

  // The new wiring is a bit more involved.
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  let didError = false;
  const serverData = {
    repos: wrapPromise(getRepos, (data) => {
      res.write(`
        <script>
          repos = ${JSON.stringify(data)};
          selectedRepo = repos[0];
        </script>
      `);
    }),
    metrics: wrapPromise(
      getMetrics,
      (data) => {
        res.write(`
        <script>
          metrics = ${JSON.stringify(data)};
        </script>
      `);
      },
      3000 // delay for demonstrating independent hydration
    ),
    selectedRepo: wrapPromise(() => Promise.resolve()),
  };
  const stream = renderToPipeableStream(
    <DataProvider data={serverData}>
      <App assets={assets} />
    </DataProvider>,
    {
      bootstrapScripts: [assets["main.js"]],
      onShellReady() {
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        stream.pipe(res);
      },
      onError(x) {
        didError = true;
        console.error(x);
      }
    }
  );
  // Abandon and switch to client rendering if enough time passes.
  // Try lowering this to see the client recover.
  setTimeout(() => stream.abort(), ABORT_DELAY);
};

function wrapPromise(promiseCall, callback = ($) => $, delay = API_DELAY) {
  let status = "pending";
  let result;

  let suspender = new Promise((resolve) => setTimeout(resolve, delay))
    .then(() => promiseCall())
    .then(
      (r) => {
        status = "success";
        result = r;
        callback(result);
      },
      (e) => {
        status = "error";
        result = e;
      }
    );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}