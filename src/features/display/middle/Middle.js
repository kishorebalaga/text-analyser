import React from "react";
import { countNoOfWords } from "../top/WordsSlice";
import { useDispatch } from "react-redux";

const Middle = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-row justify-center items-center w-full mt-16">
      <textarea
        rows={15}
        cols={160}
        style={{ padding: 20 }}
        onChange={(e) => {
          dispatch(countNoOfWords(e.target.value));
        }}
      />
    </div>
  );
};

export default Middle;
