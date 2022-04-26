import React from "react";
import { useData } from "../../hook";
// import "./Sidebar.scss";
// import logo from "../../logo.svg";
import Container from "../../shared/Container";

const Sidebar = () => {
  const repos = useData("repos");
  return (
    <Container className="menuList" title="Repos">
      {repos.map((repo) => (
        <div key={repo.id} className="menu">
          {repo.name}
        </div>
      ))}
    </Container>
  );
};

export default Sidebar;
