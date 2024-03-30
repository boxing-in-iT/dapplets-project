import { createSlice } from "@reduxjs/toolkit";
import { Genre, sortOptions } from "../../shared/Types";

const initialState = {
  searchTerm: "",
  sortBy: "popularity.desc",
  userGenres: [] as Genre[],
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    updateSortBy(state, action) {
      state.sortBy = action.payload;
    },
    addUserGenre(state, action) {
      const genreId = action.payload;
      const index = state.userGenres.indexOf(genreId);
      if (index === -1) {
        // Если жанр не найден, добавляем его
        state.userGenres.push(genreId);
      } else {
        // Если жанр уже существует, удаляем его
        state.userGenres.splice(index, 1);
      }
    },
    removeUserGenre(state, action) {
      state.userGenres = state.userGenres.filter(
        (genre) => genre !== action.payload
      );
    },
  },
});

export const { updateSearchTerm, updateSortBy, addUserGenre, removeUserGenre } =
  moviesSlice.actions;

export default moviesSlice.reducer;
