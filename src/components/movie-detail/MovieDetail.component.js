import {useGetMovieDetailQuery} from '../../redux/apiTheMoviedb';
import './MovieDetail.styles.scss'

const MovieDetailComponent = ({movieId}) => {
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);

  if (isLoading) {
    return null;
  }

  const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return(
    <div className="movie-detail">
      <div className="image-description-container">
        <img src={movieImage} alt={movie.title} />
      </div>
      <aside className="movie-description">
        <h1>{movie.title}</h1>
        <h3>{movie.overview}</h3>
        <button>Add to wishlist</button>
      </aside>
    </div>
  );
}

export default MovieDetailComponent;
