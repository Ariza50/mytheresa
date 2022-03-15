import MovieBannerComponent from '../components/movie-banner/MovieBanner.component';
import {useSelector} from '../redux/store';

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <div>
      <div>Wishlist</div>
      {wishlistItems.map(item => (<MovieBannerComponent key={item.id} movieId={item.id} />))}
    </div>
  );
}

export default Wishlist;
