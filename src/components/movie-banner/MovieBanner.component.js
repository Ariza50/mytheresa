import './MovieBanner.styles.scss';
import {useGetMovieDetailQuery} from '../../redux/apiTheMoviedb';

const MovieBannerComponent = ({movieId}) => {
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);

  if (isLoading) {
    return null;
  }

  const movieImage = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

  return (
    <div className="banner">

      <div className="banner-content">
        <div className="banner-image">
          <img className="circle" src={movieImage} alt="" />
        </div>
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
      </div>
    </div>
  );
}

export default MovieBannerComponent;
