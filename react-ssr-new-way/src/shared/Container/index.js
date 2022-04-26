import React from "react";
// import "./Container.scss";

const Container = ({ title, className, icon, children }) => {
  return (
    <div className={`container ${className}`}>
      <div className="header">
        {icon && <img src={icon} className="logo" alt="logo" />}
        <h1 className="title">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Container;
