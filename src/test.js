import React, { useState } from "react";
import { WatsonHealthImageAvailabilityLocal } from "@carbon/icons-react";
import {
  ChevronDown,
  ChevronUp,
  AddFilled,
  SubtractAlt,
} from "@carbon/icons-react";
import { Checkbox, Button, Radio, Space, Input, DatePicker } from "antd";

const { RangePicker } = DatePicker;

const classesNames = [
  { label: "Economy", value: "Economy" },
  { label: "Premium Economy", value: "Premium Economy" },
  { label: "Business", value: "Business" },
];

const passengersTypes = [
  { label: "Adult", value: "adult" },
  { label: "Children", value: "child" },
  { label: "Infants", value: "infant" },
];

const options = [
  { label: "Fruit", value: "fruit" },
  { label: "Vegetable", value: "vegetable" },
  { label: "Meat", value: "meat" },
];

const optionsDestination = [
  { label: "Delhi", value: "Delhi" },
  { label: "Vishakapatnam", value: "Vishakapatnam" },
  { label: "Chennai", value: "Chennai" },
];

const BookingForm = () => {
  const [optionChangeFrom, setFromOptionChange] = useState("");
  const [optionChangeTo, setToOptionChange] = useState("");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    class: "",
    adult: 0,
    child: 0,
    infant: 0,
    expressEntry: false,
  });

  const [showEconomyDropdown, setShowEconomyDropDown] = useState(false);
  const [showDropdownFromTo, setDropDownFromTo] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  const onChangeExpressEntry = () => {};

  const handleFromOptionClick = (option) => {
    setFromOptionChange(option);
    setFormData((prevData) => ({ ...prevData, from: option }));
    setDropDownFromTo(false);
  };

  const handleToOptionClick = (option) => {
    setToOptionChange(option);
    setFormData((prevData) => ({ ...prevData, to: option }));
    setDropDownFromTo(false);
  };

  const handleInputChangeFrom = (e) => {
    setFromOptionChange(e.target.value);
    setDropDownFromTo(true);
  };

  const handleInputChangeTo = (e) => {
    setToOptionChange(e.target.value);
    setDropDownFromTo(true);
  };

  const handleClassClick = (option) => {
    setFormData((prevData) => ({ ...prevData, class: option }));
    setShowEconomyDropDown(false);
  };

  const onClickAdd = (passenger) => {
    switch (passenger) {
      case "adult":
        setFormData((prevData) => ({ ...prevData, adult: prevData.adult + 1 }));
        break;
      case "child":
        setFormData((prevData) => ({ ...prevData, child: prevData.child + 1 }));
        break;
      case "infant":
        setFormData((prevData) => ({
          ...prevData,
          infant: prevData.infant + 1,
        }));
        break;
      default:
        break;
    }
  };

  const onClickMinus = (passenger) => {
    switch (passenger) {
      case "adult":
        if (formData.adult > 0) {
          setFormData((prevData) => ({
            ...prevData,
            adult: prevData.adult - 1,
          }));
        }
        break;
      case "child":
        if (formData.child > 0) {
          setFormData((prevData) => ({
            ...prevData,
            child: prevData.child - 1,
          }));
        }
        break;
      case "infant":
        if (formData.infant > 0) {
          setFormData((prevData) => ({
            ...prevData,
            infant: prevData.infant - 1,
          }));
        }
        break;
      default:
        break;
    }
  };

  const handlePassengerClick = () => {
    setShowPassengerDropdown(!showPassengerDropdown);
  };

  const optionFilterFrom = options.filter((option) =>
    option.value.toLowerCase().includes(optionChangeFrom.toLowerCase())
  );

  const optionFilterTo = optionsDestination.filter((option) =>
    option.value.toLowerCase().includes(optionChangeTo.toLowerCase())
  );

  const onClickEconomyHandler = () => {
    setShowEconomyDropDown(!showEconomyDropdown);
  };

  const renderPassengerCount = (passenger) => {
    switch (passenger) {
      case "adult":
        return formData.adult;
      case "child":
        return formData.child;
      case "infant":
        return formData.infant;
      default:
        return 0;
    }
  };

  const dateFormat = "YYYY/MM/DD";

  return (
    <div className="w-screen h-screen bg-zinc-100">
      <div className="m-auto flex items-center justify-center">
        <div className="flex flex-col border-solid border-2 border-slate-200 w-2/4 p-4">
          <div className="flex flex-row justify-between">
            <div className="text-blue-900">Hi, where would you like to go?</div>
            <Checkbox onChange={onChangeExpressEntry}>Express entry</Checkbox>
          </div>
          <div className="h-px bg-gray-300 my-6 md:my-4" />
          <div className="pb-6 md:pb-4">
            <Radio>Book flights</Radio>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <Space.Compact size="large">
                <Input
                  addonBefore={<WatsonHealthImageAvailabilityLocal />}
                  placeholder="From"
                  onChange={handleInputChangeFrom}
                  value={optionChangeFrom}
                />
                <Input
                  placeholder="To"
                  onChange={handleInputChangeTo}
                  value={optionChangeTo}
                />
              </Space.Compact>
              {showDropdownFromTo &&
                optionFilterFrom.map((opt) => (
                  <div
                    key={opt.label}
                    className="p-3 z-10 border-solid border-zinc-300 border-0 bg-white first:border-t-2 last:border-b-2 border-x-2 cursor-pointer hover:bg-slate-200 rounded-sm"
                    onClick={() => handleFromOptionClick(opt.label)}
                  >
                    {opt.label}
                  </div>
                ))}
              {showDropdownFromTo &&
                optionFilterTo.map((opt) => (
                  <div
                    key={opt.label}
                    className="p-3 z-10 border-solid border-zinc-300 border-0 bg-white first:border-t-2 last:border-b-2 border-x-2 cursor-pointer hover:bg-slate-200 rounded-sm"
                    onClick={() => handleToOptionClick(opt.label)}
                  >
                    {opt.label}
                  </div>
                ))}
            </div>

            <div
              className={`flex ${formData.from ? "items-start" : "flex-row"}`}
            >
              <RangePicker placeholder={["Depart Date", "Return Date"]} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-4/12">
              <div className="flex flex-row w-full">
                <div
                  className="border-solid border-zinc-300 border-[1px] h-10 rounded-md bg-white mt-6 mr-6 hover:border-blue-400 w-full p-0"
                  onClick={onClickEconomyHandler}
                >
                  <div className="flex flex-row items-center justify-between p-1">
                    <div className="font-bold pl-2">
                      {formData.class ? formData.class : "Class"}
                    </div>
                    <div className="m-2">
                      {showEconomyDropdown ? <ChevronDown /> : <ChevronUp />}
                    </div>
                  </div>
                </div>
              </div>
              {showEconomyDropdown &&
                classesNames.map((opt) => (
                  <div
                    key={opt.value}
                    className="p-3 z-10 border-solid border-zinc-300 border-0 mr-6 bg-white first:border-t-2 last:border-b-2 border-x-2 cursor-pointer hover:bg-slate-200 rounded-sm font-bold"
                    onClick={() => handleClassClick(opt.value)}
                  >
                    {opt.value}
                  </div>
                ))}
            </div>

            <div className="flex flex-col w-4/12">
              <div className="flex flex-row w-full">
                <div
                  className="border-solid border-zinc-300 border-[1px] h-10 rounded-md bg-white mt-6 mr-6 hover:border-blue-400 w-full p-0"
                  onClick={handlePassengerClick}
                >
                  <div className="flex flex-row items-center justify-between p-1">
                    <div className="font-bold pl-2">{"Passengers"}</div>
                    <div className="m-2">
                      {showPassengerDropdown ? <ChevronDown /> : <ChevronUp />}
                    </div>
                  </div>
                </div>
              </div>
              {showPassengerDropdown &&
                passengersTypes.map((opt) => (
                  <div
                    key={opt.value}
                    className="p-3 z-10 border-solid border-zinc-300 border-0 mr-6 bg-white first:border-t-2 last:border-b-2 border-x-2 cursor-pointer hover:bg-slate-200 rounded-sm font-bold"
                  >
                    <div className="flex flex-row justify-between">
                      {opt.label}
                      <div className="flex flex-row items-center">
                        <AddFilled
                          onClick={() => onClickAdd(opt.value)}
                          color={
                            formData[opt.value] === 0 ? "#F4F6FA" : "#7DA9F7"
                          }
                        />
                        <div className="px-4">
                          {renderPassengerCount(opt.value)}
                        </div>
                        <SubtractAlt
                          onClick={() => onClickMinus(opt.value)}
                          color={
                            formData[opt.value] === 0 ? "#F4F6FA" : "#7DA9F7"
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-6">
              <Button size="large">Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
