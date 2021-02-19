import React from "react";

import "./loader.styles.scss";

const Loader = ({ onLoader, children }) => {
  if (onLoader) {
    return (
      <div className="loader">
        <img src="https://i.gifer.com/ZlXo.gif" alt="loader" />
      </div>
    );
  }
  return children;
};

export default Loader;
