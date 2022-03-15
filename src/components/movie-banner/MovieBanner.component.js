import './MovieBanner.styles.scss';
import {useNavigate} from 'react-router-dom';
import {useGetMovieDetailQuery} from '../../redux/apiTheMoviedb';
import {removeFromWishlist} from '../../redux/slices/wishlist.slice';
import {useDispatch} from '../../redux/store';

const MovieBannerComponent = ({movieId, removeAction = false}) => {
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeItemFromWishlist = (movie) => {
    dispatch(removeFromWishlist(movie));
  }

  const goToDetails = (movieId) => {
    navigate(`/detail/${movie.id}`);
  }

  if (isLoading) {
    return null;
  }

  const movieImage = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

  return (
    <div className="banner">

      <div className="banner-content">
        <img onClick={() => goToDetails(movie.id)} src={movieImage} alt="" />
        <div className="banner-properties">
          <h3>Original title:</h3>
          <h3>Homepage:</h3>
          <h3>popularity:</h3>
          <h3>Score:</h3>
          <h3>Number of votes:</h3>
        </div>
        <div className="banner-values">
          <h3>{movie.original_title}</h3>
          <h3><a href={movie.homepage} target="_blank">{movie.homepage}</a></h3>
          <h3>{movie.popularity}</h3>
          <h3 >{movie.vote_average} ⭐️</h3>
          <h3>{movie.vote_count}</h3>
        </div>
        {
          removeAction
            ? <div onClick={() => removeItemFromWishlist(movie)} className="banner-remove">❌</div>
            : null
        }
      </div>
    </div>
  );
}

export default MovieBannerComponent;
