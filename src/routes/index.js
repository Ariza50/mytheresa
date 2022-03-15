import {Routes, Route} from 'react-router-dom';
import TestComponent from '../components/testComponent/Test.component';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Wishlist from '../pages/Wishlist';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="detail/:movieId" element={ <Detail /> } />
      <Route path="wishlist" element={ <Wishlist /> } />
      <Route path="test" element={ <TestComponent /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default Router;
