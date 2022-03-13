import {Provider as ReduxProvider} from 'react-redux';
import ReactDom from 'react-dom';
import App from './App';
import './styles.scss';
import {store} from './redux/store';

ReactDom.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
