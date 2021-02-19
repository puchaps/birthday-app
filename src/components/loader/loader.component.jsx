import React from "react";

import "./loader.styles.scss";

const Loader = ({ onLoader, children }) => {
  if (onLoader) {
    return (
      <img
        className="loader-img"
        src="https://www.flaticon.com/svg/vstatic/svg/59/59414.svg?token=exp=1613740574~hmac=4775a161487fa33eacd097e207d09cba"
        alt="loader"
      />
    );
  }
  return children;
};

export default Loader;
