import React from "react";
import Top from "./top/Top";
import Middle from "./middle/Middle";
import Bottom from "./bottom/Bottom";

const Display = () => {
  return (
    <div className=" mx-4 w-4/5 ml-auto mr-auto">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Display;
