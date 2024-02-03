import React from "react";
import { useSelector } from "react-redux";

const Top = (props) => {
  const countNoOfWords = useSelector((state) => state.words.noOfWords);
  const countNoOfCharacters = useSelector(
    (state) => state.words.noOfCharacters
  );
  const countNoOfSentences = useSelector((state) => state.words.noOfSentences);
  const countNoOfParagraph = useSelector((state) => state.words.noOfParagraph);
  return (
    <div className=" flex flex-row justify-around border-solid p-10 bg-white items-center mt-16">
      <div className="flex flex-col justify-center items-center">
        <div className=" font-bold text-[#9e9e9e]">Words</div>
        <div className="font-bold">{countNoOfWords}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className=" font-bold text-[#9e9e9e]">Characters</div>
        <div className="font-bold">{countNoOfCharacters}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className=" font-bold text-[#9e9e9e]">Sentences</div>
        <div className="font-bold">{countNoOfSentences}</div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className=" font-bold text-[#9e9e9e]">Paragraph</div>
        <div className="font-bold">{countNoOfParagraph}</div>
      </div>
    </div>
  );
};

export default Top;
