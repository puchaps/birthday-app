import { useContext } from 'react';

import './birthday-preview.styles.scss';

import { UsersContext } from '../../context/users/users.context';

import BirthdayToday from '../birthday-today/birthday-today.component';
import BirthdatOverview from '../birthdat-overview/birthdat-overview.component';
import CustomButton from '../custom-button/custom-button.component';
import Loaded from '../loader/loader.component';

const BirthdayPreview = () => {
  const {setUsersDB, loaded} = useContext(UsersContext);

  if (loaded) {
    return <Loaded/>
  };
  
  return(
    <div className="birthday-preview">
      <BirthdayToday/>
      <BirthdatOverview/>
      <CustomButton onClick = {() => setUsersDB([])}>
        CLEAR ALL
      </CustomButton>
    </div> 
  );
};

export default BirthdayPreview;