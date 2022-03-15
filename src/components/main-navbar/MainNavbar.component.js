import './MainNavbar.styles.scss';
import {useNavigate} from 'react-router-dom';

const MainNavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 onClick={() => navigate('/')}>The movie db</h1>
      <button onClick={() => navigate('/wishlist')}>whislist</button>
    </div>
  );
}

export default MainNavbarComponent;
