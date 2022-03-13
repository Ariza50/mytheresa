import {Routes, Route} from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="detail" element={ <Detail /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default Router;
