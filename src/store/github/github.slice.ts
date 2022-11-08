import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfk";

interface GithubState {
  favourires: string[];
}

const initialState: GithubState = {
  // Если в localStorage есть переменная LS_FAV_KEY, тогда присваиваем ее значение к favourires,
  // Если такой переменной нет, то присваеваем пустой массив
  favourires: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<string>) => {
      state.favourires.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourires));
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favourires = state.favourires.filter(
        (user) => user !== action.payload
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourires));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
