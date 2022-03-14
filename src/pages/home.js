import {Link} from 'react-router-dom';
import CarouselComponent from '../components/carousel/carousel.component';
import {useGetConfigurationQuery} from '../redux/apiTheMoviedb';

const Home = () => {
  const { data } = useGetConfigurationQuery();
  return (
    <div className="container">
    MyTheresa
    <main>
      <h1>This is the home page</h1>
      <Link to="detail">Click to view our detail page</Link>
      <CarouselComponent genreId={28} />
     </main>
  </div>
  );
}

export default Home;
