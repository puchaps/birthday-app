import { useContext } from 'react';

import './birthdat-overview.styles.scss';

import { UsersContext } from '../../context/users/users.context';

import FiendItem from '../friend-item/friend-item.component';

const BirthdatOverview = () => {
  const {usersDB} = useContext(UsersContext);
  
  return(
    <div className="birthdat-overview">
      {
        usersDB.map(({id, ...otherProps}) => <FiendItem key = {id} {...otherProps}/>)
      }
    </div>
  );
};

export default BirthdatOverview;