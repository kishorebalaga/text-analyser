import React from "react";
import { Checkbox, Radio } from "antd";

const BookingForm = () => {
  const onChangeExpressEntry = () => {};
  return (
    <div className=" w-screen h-screen bg-zinc-100">
      <div className="m-auto flex items-center justify-center">
        <div className=" flex flex-col border-solid border-2 border-slate-200 w-3/4 p-4">
          <div className="flex flex-row  justify-between">
            <div className="text-blue-900">Hi, where would like to go? </div>
            <Checkbox onChange={onChangeExpressEntry}>Express entry</Checkbox>
          </div>
          <div className="h-px bg-gray-300 my-6 md:my-4" />
          <div className="pb-6 md:pb-4">
            <Radio>Book flights</Radio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
