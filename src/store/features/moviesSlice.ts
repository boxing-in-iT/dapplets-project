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
      state.userGenres.push(action.payload);
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
