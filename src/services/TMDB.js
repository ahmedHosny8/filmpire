import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tmdbApiKey = 'e638adb851efa8873c57f9e1a5956685';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => {
    return {
      // Get Genres
      getGenres: builder.query({
        query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
      }),

      // Get Movies by [Type]
      getMovies: builder.query({
        query: ({ genreIdOrCategoryName, page, searchQuery }) => {
          // Get Movies by Search
          if (searchQuery) {
            return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
          }

          // Get Movies by Category
          if (
            genreIdOrCategoryName &&
            typeof genreIdOrCategoryName === 'string'
          ) {
            return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
          }

          // Get Movies by Genre
          if (
            genreIdOrCategoryName &&
            typeof genreIdOrCategoryName === 'number'
          ) {
            return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
          }

          // Get popular movies by default
          return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
        },
      }),

      // Get Movie
      getMovie: builder.query({
        query: (id) =>
          `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
      }),

      getList: builder.query({
        query: ({ listName, accountId, sessionId, page }) =>
          `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
      }),

      // Get user specific lists
      getRecommendations: builder.query({
        query: ({ movie_id, list }) =>
          `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
      }),

      //Get Actor details
      getActorsDetails: builder.query({
        query: ({ actor_id }) => `/person/${actor_id}?api_key=${tmdbApiKey}`,
      }),

      getMoviesByActorId: builder.query({
        query: ({ id, page }) =>
          `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
      }),
    };
  },
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetListQuery,
  useGetRecommendationsQuery,
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} = tmdbApi;
