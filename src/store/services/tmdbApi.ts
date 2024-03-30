import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTI2MjM5NDU1YTk2YWIwZWZiZjU3NWEyMGI0YjBhZCIsInN1YiI6IjY0ZmNlMzFjZGMxY2I0MDBjOGJmZjg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WshukoOlWbKlUeu4mU_ICGaVRs98Thsj17fPbxAIFiM"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (sortBy) =>
        `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortBy}`,

      // `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?language=en`,
    }),
    getMovieByName: builder.query({
      query: (searchTerm) =>
        `search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
    }),
    getMoviesWithGenres: builder.query({
      query: (genreIds: number[]) => {
        const formattedGenreIds = genreIds.join("%2C");
        return `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${formattedGenreIds}`;
      },
    }),
    getMovieById: builder.query({
      query: (id) => `movie/${id}?language=en-US`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieByNameQuery,
  useGetMoviesWithGenresQuery,
  useGetMovieByIdQuery,
} = tmdbApi;
