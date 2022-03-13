import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {rootPersistConfig, rootReducer} from './rootReducer';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
  )
});

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { store, useSelector, useDispatch }
