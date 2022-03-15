import { useParams } from 'react-router-dom';
import MovieBannerComponent from '../components/movie-banner/MovieBanner.component';
import MovieDetailComponent from '../components/movie-detail/MovieDetail.component';

const Detail = () => {
  const { movieId } = useParams();

  return(
    <div className="container">
      MyTheresa
      <main>
        <h1>This is the detail page</h1>
        <MovieDetailComponent movieId={movieId} />
        <MovieBannerComponent movieId={movieId} />
      </main>
    </div>
  );
}

export default Detail;
