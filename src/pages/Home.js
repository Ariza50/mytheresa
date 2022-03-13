import {Link} from 'react-router-dom';
const Home = () => (
  <div className="container">
    MyTheresa
    <main>
      <h1>This is the home page</h1>
      <Link to="detail">Click to view our detail page</Link>
    </main>
  </div>
)

export default Home;
