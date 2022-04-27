/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useState, useEffect } from "react";
import { useData } from "./data";

export default function Details() {
  const selectedRepo = useData("selectedRepo");
  // todo: fix by babel
  const state = useState();
  const repoDetail = state[0];
  const setRepoDetail = state[1];
  useEffect(() => {
    const repo = selectedRepo || window.selectedRepo;
    if (repo) {
      console.log("========", repo);
      fetch(`/api/repos/${repo.name}`)
        .then((res) => res.json())
        .then(setRepoDetail);
    }
  }, [selectedRepo]);
  return (
    <>
      <h1>Details</h1>
      {repoDetail ? (
        <div>
          <h3>{repoDetail.name}</h3>
          <p>{repoDetail.description}</p>
        </div>
      ) : (
        <p>Please click any repo in sidebar to see its details</p>
      )}
    </>
  );
}
