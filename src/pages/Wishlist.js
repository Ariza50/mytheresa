import {useNavigate} from 'react-router-dom';
import MovieBannerComponent from '../components/movie-banner/MovieBanner.component';
import {useSelector} from '../redux/store';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <div>
      <button className="go-back-button" onClick={() => navigate('/')}>⬅️</button>
      {wishlistItems.map(item => (<MovieBannerComponent key={item.id} movieId={item.id} removeAction={true} />))}
    </div>
  );
}

export default Wishlist;
