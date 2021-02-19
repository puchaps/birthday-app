import React, { useContext } from "react";

import "./birthday-today.styles.scss";

import { UsersContext } from "../../context/users/users.context";

const BirthdayToday = () => {
  const { usersDB } = useContext(UsersContext);

  return (
    <div className="birthday-today">
      <span className="birthday-today-decr">
        {usersDB.length} Birthdays today
      </span>
    </div>
  );
};

export default BirthdayToday;
