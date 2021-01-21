import './friend-item.styles.scss';

const Frienditem = ({ username, email, address: { city } }) => {
  return(
    <div className="friend-item">
      <div className="friend-item-image">
        <img 
          src="https://cdn.iconscout.com/icon/free/png-512/batman-1417681-1197293.png" 
          alt="betmen"
        />
      </div>
      <div className="friend-item-descr">
        <div className="friend-item-name-and-email">
          <span className="name">
            {username}
          </span>
          <a className="email" href = '#'>
            {email}
          </a>
        </div>
        <div className="friend-item-address">
          <span className="city">
            City: {city}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Frienditem;