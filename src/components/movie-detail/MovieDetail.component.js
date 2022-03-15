import {useEffect, useState} from 'react';
import {useGetMovieDetailQuery} from '../../redux/apiTheMoviedb';
import './MovieDetail.styles.scss'
import {addToWishlist, removeFromWishlist} from '../../redux/slices/wishlist.slice';
import {useDispatch, useSelector} from '../../redux/store';

const MovieDetailComponent = ({movieId}) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);
  let [isAWishItem, setIsAWishItem] = useState(false);

  useEffect(() => {
    setIsAWishItem(wishlistItems.some(item => item.id === parseInt(movieId)));
  }, [wishlistItems]);

  if (isLoading) {
    return null;
  }

  const addItemToWhisList = () => {
    dispatch(addToWishlist(movie));
  }

  const removeItemFromWishList = () => {
    dispatch(removeFromWishlist(movie));
  }

  const manageItemToWishlist = () => {
    isAWishItem
      ? removeItemFromWishList()
      : addItemToWhisList()
  }

  const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return(
    <div className="movie-detail">
      <div className="image-description-container">
        <img src={movieImage} alt={movie.title} />
      </div>
      <div className="movie-description">
        <h1>{movie.title}</h1>
        <h3>{movie.overview}</h3>
        <button onClick={manageItemToWishlist}>{ isAWishItem ? 'Remove from Wishlist' : 'Add to wishlist' }</button>
      </div>
    </div>
  );
}

export default MovieDetailComponent;
