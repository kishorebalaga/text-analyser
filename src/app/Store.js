import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "../features/display/top/WordsSlice";

export const store = configureStore({
  reducer: { words: wordsReducer },
});
