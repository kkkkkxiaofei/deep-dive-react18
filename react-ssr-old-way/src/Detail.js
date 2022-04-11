import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/DataContext";
import * as API from "./api";

function Detail({ name }) {
  console.log('=======0=======');
  const [data, setData] = useState([]);
  useEffect(async () => {
    console.log('=======1=======');
    const repos = await API.getRepos();
    setData(repos);
  }, []);
  return (
    <div>
      <div>123</div>
      <div>{name}</div>
      {
        data.map(({ name }) => (<div>{name}</div>))  
      }
    </div>
  );
};

export default Detail;