/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useData } from "./data";

export default function Metrics() {
  const metrics = useData("metrics");
  return (
    <>
      {Object.entries(metrics).map((entry) => (
        <div>
          <h3>{entry[0]}</h3>
          <p
            className="metric"
            key={entry[0]}
            onClick={() => console.log(entry[0])}
          >
            {entry[1]}
          </p>
        </div>
      ))}
    </>
  );
}
