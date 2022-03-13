import {combineReducers} from 'redux';
import storage from "redux-persist/lib/storage"
import {apiTheMoviedb} from './apiTheMoviedb';

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: []
}

const rootReducer = combineReducers({
  [apiTheMoviedb.reducerPath]: apiTheMoviedb.reducer
});

export { rootPersistConfig, rootReducer }
