import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/loader/loader.component";

export const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [usersDB, setUsersDB] = useState([]);
  const [loaded, setLoading] = useState(true);

  const transformUsersDB = (users) => users.filter((_, index) => index < 5);

  const handleUseEffect = useCallback(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => transformUsersDB(res.data))
      .then((con) => {
        setUsersDB(con);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleUseEffect();
  }, [handleUseEffect]);

  return (
    <Loader onLoader={loaded}>
      <UsersContext.Provider
        value={{
          usersDB,
          setUsersDB,
        }}
      >
        {children}
      </UsersContext.Provider>
    </Loader>
  );
};

export default UsersProvider;
