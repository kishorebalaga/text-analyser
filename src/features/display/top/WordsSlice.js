import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfWords: 0,
  noOfCharacters: 0,
  noOfSentences: 0,
  longestWord: "",
  noOfParagraph: 0,
  readingTime: 0,
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    countNoOfWords: (state, action) => {
      const WordsPerMinute = 200;
      const arr = action.payload?.trim().split(" ");
      const charArr = action.payload?.trim().split("");
      const noOfCharArr = charArr.filter((x) => x != " ");
      const sentcesChar = action.payload?.trim().split(".");
      const sentecsCharrArr = sentcesChar.filter((x) => x != "");
      const paraArr = action.payload?.split(/\n\s*\n/).filter(Boolean).length;
      const longWord = arr.reduce((longWord, initialValue) =>
        longWord.length > initialValue.length ? longWord : initialValue
      );

      state.noOfWords = arr.length;
      state.noOfCharacters = noOfCharArr.length;
      state.noOfSentences = sentecsCharrArr.length;
      state.noOfParagraph = paraArr;
      state.longestWord = longWord;
      state.readingTime = Math.ceil(arr.length / WordsPerMinute);
    },
  },
});

export const { countNoOfWords } = wordsSlice.actions;

export default wordsSlice.reducer;
