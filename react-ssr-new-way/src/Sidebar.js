/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useData } from "./data";

export default function Sidebar() {
  const repos = useData("repos");
  return (
    <>
      <h1>Repos</h1>
      <ul>
        {repos.map(({ id, name }) => (
          <li key={id} onClick={() => console.log(name)}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
