import {useGetMovieDetailQuery} from '../../redux/apiTheMoviedb';
import './MovieDetail.styles.scss'

const MovieDetailComponent = ({movieId}) => {
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);
  console.log("-> movie", movie);

  if (isLoading) {
    return null;
  }

  const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return(
    <div className="movie-detail">
      <div className="image-description-container">
        <img src={movieImage} alt={movie.title} />
      </div>
      <aside>
        <div className="movie-description">
          <div className="title-section">
            <h1>{movie.title}</h1>
          </div>
          <div className="description-content">
            <h3>{movie.overview}</h3>
            <div style={{textAlign: 'right'}}>
              <button>Add to wishlist</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MovieDetailComponent;
