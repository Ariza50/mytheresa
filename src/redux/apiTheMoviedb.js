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
  }),
});

export const { useGetConfigurationQuery } = apiTheMoviedb;
