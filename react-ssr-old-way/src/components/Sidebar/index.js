import React from "react";
import { useData } from "../../hook";
import "./Sidebar.scss";
import logo from "../../logo.svg";
import Container from "../../shared/Container";

const Sidebar = () => {
  const { repos = [], selectedRepo, updateSelectedRepo } = useData();
  const handleClick = (repo) => () => updateSelectedRepo(repo);
  return (
    <Container className="menuList" title="Repos" icon={logo}>
      {repos.map((repo) => (
        <div
          key={repo.id}
          className={`${
            selectedRepo?.id === repo.id ? "menu highlight" : "menu"
          }`}
          onClick={handleClick(repo)}
        >
          {repo.name}
        </div>
      ))}
    </Container>
  );
};

export default Sidebar;
