import { Routes, Route }  from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="detail" element={ <Detail /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  </div>
)

export default App;
