import {useNavigate} from 'react-router-dom';
import './BadgeButton.styles.scss';
import {useSelector} from '../../redux/store';

const BadgeButtonComponent = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();

  return (
    <div>
      <button className="wishlist-button" onClick={() => navigate('/wishlist')}>Wishlist</button>
      {
        wishlistItems.length > 0
          ? <div className="badge">{wishlistItems.length}</div>
          : null
      }
    </div>
  );
}

export default BadgeButtonComponent;
