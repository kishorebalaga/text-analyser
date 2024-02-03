import React from "react";
import { useSelector } from "react-redux";

const Bottom = (props) => {
  const longestWord = useSelector((state) => state.words.longestWord);
  const countNoOfCharacters = useSelector(
    (state) => state.words.noOfCharacters
  );

  const ReadingTime = useSelector((state) => state.words.readingTime);

  console.log("longestWord ==>", longestWord);
  return (
    <div className=" flex flex-row justify-around border-solid p-10 bg-white items-center mt-16">
      <div className="flex flex-row justify-center items-center">
        <div className=" font-bold text-[#9e9e9e]">{"Longest Word : "} </div>
        <div className="font-bold">{longestWord}</div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className=" font-bold text-[#9e9e9e]">Average Reading Time : </div>
        <div className="font-bold">{ReadingTime}</div>
      </div>
    </div>
  );
};

export default Bottom;
