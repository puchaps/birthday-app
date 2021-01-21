
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext();

const UsersProvider = ({children}) => {
  const[usersDB, setUsersDB] = useState([]);
  const[loaded, setLoading] = useState(true);

  const converdUsersDB = (users) => {
    return users.filter((item, index) => index < 5)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then( res => converdUsersDB(res.data))
      .then( con => {
        setUsersDB(con);
        setLoading(false);
      });
  }, []);
  
  return(
    <UsersContext.Provider value = {{
      usersDB,
      setUsersDB,
      loaded
    }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;