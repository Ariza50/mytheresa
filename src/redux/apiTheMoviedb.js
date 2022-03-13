import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const apiTheMoviedb = createApi({
  reducerPath: "moviedbApi",
  baseQuery: fetchBaseQuery( {
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${process.env.BEARER_TOKEN}`)
      return headers
    }
  }),
  endpoints: (builder) => ({
    getConfiguration: builder.query({
      query: () =>
        'configuration',
    }),
    getMovieByGenre: builder.query({
      query: (genreId) =>
        `discover/movie?language=${process.env.LANGUAGE}&page=1&with_genres=${genreId}`
    })
  }),
});

export const { useGetConfigurationQuery, useGetMovieByGenreQuery } = apiTheMoviedb;
