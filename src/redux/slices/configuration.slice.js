import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  configuration: {
    imageURL: 'https://image.tmdb.org/t/p/',
    language: 'en-US',
    posterSize: 'w500',
    iconSize: 'w300'
  }
}

const slice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setImageURL(state, action) {
      state.configuration = {
        ...state.configuration,
        imageURL: action.payload,
      }
    },
    setLanguage(state, action) {
      state.configuration = {
        ...state.configuration,
        language: action.payload,
      }
    },
  }
});

export function modifyImageURL(imageURL) {
  return async (dispatch) => {
    dispatch(slice.actions.setImageURL(imageURL));
  }
}

export function modifyLanguage(language) {
  return async (dispatch) => {
    dispatch(slice.actions.setLanguage(language));
  }
}

export default slice.reducer;
