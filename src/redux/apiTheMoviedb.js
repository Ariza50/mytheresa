import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const apiTheMoviedb = createApi({
  reducerPath: "moviedbApi",
  baseQuery: fetchBaseQuery( { baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getConfiguration: builder.query({
      query: () =>
        'configuration',
    }),
  })
});

export const { useGetConfiguration } = apiTheMoviedb;
