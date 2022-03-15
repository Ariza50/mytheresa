import {Link} from 'react-router-dom';
import CarouselComponent from '../components/carousel/carousel.component';
import {useGetConfigurationQuery} from '../redux/apiTheMoviedb';

const Home = () => {
  const { data } = useGetConfigurationQuery();
  return (
    <div className="container">
      <main>
        <CarouselComponent genreId={28} carouselTitle="Action" />
        <CarouselComponent genreId={14} carouselTitle="Fantasy" />
        <CarouselComponent genreId={37} carouselTitle="Western" />
      </main>
  </div>
  );
}

export default Home;
