import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [],
}

const slice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      state.wishlistItems.push(action.payload);
    },
    removeItemFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload.id);
    }
  }
});

export function addToWishlist(item) {
  return async (dispatch) => {
    dispatch(slice.actions.addItemToWishlist(item));
  }
}

export function removeFromWishlist(item) {
  return async (dispatch) => {
    dispatch(slice.actions.removeItemFromWishlist(item));
  }
}

export default slice.reducer;
