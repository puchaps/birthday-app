import React, { useContext } from "react";

import "./birthday-preview.styles.scss";

import { UsersContext } from "../../context/users/users.context";

import BirthdayToday from "../birthday-today/birthday-today.component";
import BirthdayOverview from "../birthday-overview/birthday-overview.component";
import CustomButton from "../custom-button/custom-button.component";

const BirthdayPreview = () => {
  const { setUsersDB } = useContext(UsersContext);
  return (
    <div className="birthday-preview">
      <BirthdayToday />
      <BirthdayOverview />
      <CustomButton onClick={() => setUsersDB([])}>CLEAR ALL</CustomButton>
    </div>
  );
};

export default BirthdayPreview;
