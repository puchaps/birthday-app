/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps} type="button">
    {children}
  </button>
);

export default CustomButton;
