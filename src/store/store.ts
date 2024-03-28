import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "./services/tmdbApi";
import moviesSlice from "./features/moviesSlice";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    movie: moviesSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
