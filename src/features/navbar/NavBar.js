import React from "react";
import { LogoTwitter, LogoFacebook, LogoLinkedin } from "@carbon/icons-react";

export const NavBAr = () => {
  return (
    <div className=" bg-[#f1f7ff] flex flex-row p-6 justify-between drop-shadow-md">
      <div className="text-xl font-bold">Text Analyser</div>
      <div className=" flex flex-row justify-between">
        <LogoTwitter size={30} />
        <LogoFacebook size={30} />
        <LogoLinkedin size={30} />
      </div>
    </div>
  );
};
