import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import wordsReducer from "../features/display/top/WordsSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, words: wordsReducer },
});
