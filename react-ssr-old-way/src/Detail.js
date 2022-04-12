import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/DataContext";
import * as API from "./api";

function Detail({ name }) {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(async () => {
    const repos = await API.getRepos();
    setData(repos);
  }, []);
  const handleClick = () => {
    setSelected(name);
  }
  return (
    <div>
      <div onClick={handleClick}>{name}</div>
      <div>Selected: {selected}</div>
      {
        data.map(({ name }) => (<div>{name}</div>))  
      }
    </div>
  );
};

export default Detail;