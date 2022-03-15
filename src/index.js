import {Provider as ReduxProvider} from 'react-redux';
import ReactDom from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import './styles.scss';
import {persistor, store} from './redux/store';

ReactDom.render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);
