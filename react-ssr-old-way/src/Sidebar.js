import React from "react";
import { useData } from "./hook";

const Sidebar = () => {
  const { repos = [], selectedRepo, updateSelectedRepo } = useData();
  const handleClick = (repo) => () => updateSelectedRepo(repo);
  return (
    <div>
      <h1>Repos</h1>
      {repos.map((repo) => (
        <div
          key={repo.id}
          className={`${selectedRepo?.id === repo.id ? "hightlight" : ""}`}
          onClick={handleClick(repo)}
        >
          {repo.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
