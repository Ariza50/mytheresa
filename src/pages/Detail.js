import { useParams } from 'react-router-dom';
import MovieDetailComponent from '../components/movie-detail/MovieDetail.component';
import {useGetMovieDetailQuery} from '../redux/apiTheMoviedb';

const Detail = () => {
  const { movieId } = useParams();

  return(
    <div className="container">
      MyTheresa
      <main>
        <h1>This is the detail page</h1>
        <MovieDetailComponent movieId={movieId} />
      </main>
    </div>
  );
}

export default Detail;
