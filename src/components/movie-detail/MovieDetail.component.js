import {useEffect, useState} from 'react';
import {useGetMovieDetailQuery} from '../../redux/apiTheMoviedb';
import './MovieDetail.styles.scss'
import {addToWishlist, removeFromWishlist} from '../../redux/slices/wishlist.slice';
import {useDispatch, useSelector} from '../../redux/store';

const MovieDetailComponent = ({movieId}) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);
  const { configuration } = useSelector((state) => state.configuration);
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

  const baseImageURL = configuration.imageURL + configuration.posterSize;

  return(
    <div className="movie-detail">
      <div className="image-description-container">
        <img src={baseImageURL + movie.poster_path} alt={movie.title} />
      </div>
      <div className="movie-description">
        <h1>{movie.title}</h1>
        <h3>{movie.overview}</h3>
        {
          movie.belongs_to_collection
            ? <div>
                <h3 className="collection-title">{movie.belongs_to_collection.name}</h3>
                <img src={baseImageURL + movie.belongs_to_collection.poster_path} alt="" />
              </div>
            : null
        }
        <button onClick={manageItemToWishlist}>{ isAWishItem ? 'Remove from Wishlist' : 'Add to wishlist' }</button>
      </div>
    </div>
  );
}

export default MovieDetailComponent;
