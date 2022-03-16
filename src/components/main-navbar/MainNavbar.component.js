import './MainNavbar.styles.scss';
import {useNavigate} from 'react-router-dom';
import BadgeButtonComponent from '../badge-button/BadgeButton.component';

const MainNavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 onClick={() => navigate('/')}>🎬 The moviedb</h1>
      <BadgeButtonComponent />
    </div>
  );
}

export default MainNavbarComponent;
