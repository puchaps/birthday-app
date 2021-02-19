/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";

import "./birthday-overview.styles.scss";

import { UsersContext } from "../../context/users/users.context";

import FriendItem from "../friend-item/friend-item.component";

const BirthdayOverview = () => {
  const { usersDB } = useContext(UsersContext);

  return (
    <div className="birthday-overview">
      {usersDB.map(({ id, ...otherProps }) => (
        <FriendItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default BirthdayOverview;
