import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage"
import {apiTheMoviedb} from './apiTheMoviedb';
import wishlistReducer from './slices/wishlist.slice';
import configurationReducer from './slices/configuration.slice';

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: []
}

const wishlistPersistConfig = {
  key: "whislist",
  storage,
  keyPrefix: "redux-",
  whitelist: ["wishlistItems"]
}

const configurationPersistConfig = {
  key: "configuration",
  storage,
  keyPrefix: "redux-",
  whitelist: ["configuration"]
}

const rootReducer = combineReducers({
  [apiTheMoviedb.reducerPath]: apiTheMoviedb.reducer,
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
  configuration: persistReducer(configurationPersistConfig, configurationReducer),
});

export { rootPersistConfig, rootReducer }
