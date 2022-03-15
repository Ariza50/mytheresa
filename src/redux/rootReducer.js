import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage"
import {apiTheMoviedb} from './apiTheMoviedb';
import wishlistReducer from './slices/wishlist.slice';

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: []
}

const wishlistPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["wishlistItems"]
}

const rootReducer = combineReducers({
  [apiTheMoviedb.reducerPath]: apiTheMoviedb.reducer,
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer)
});

export { rootPersistConfig, rootReducer }
