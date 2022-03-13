import {Link} from 'react-router-dom';
import {useGetConfigurationQuery} from '../redux/apiTheMoviedb';

const Home = () => {
  const { data, isLoading } = useGetConfigurationQuery();
  console.log("-> data", data);
  return (
    <div className="container">
    MyTheresa
    <main>
      <h1>This is the home page</h1>
      <Link to="detail">Click to view our detail page</Link>
    </main>
  </div>
  );
}

export default Home;
