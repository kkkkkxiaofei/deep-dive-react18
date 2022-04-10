import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";

function Sidebar({ name }) {
  const { repos } = useContext(DataContext);
  return (
    <div>
      <div>{name}</div>
      {repos.map(({ name }) => (<div key={name}>{name}</div>))}
    </div>
  );
};

export default Sidebar;