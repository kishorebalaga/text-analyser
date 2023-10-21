import React, { useState } from "react";
import {
  WatsonHealthImageAvailabilityLocal,
  AddFilled,
  SubtractAlt,
} from "@carbon/icons-react";
import { Checkbox, Button, Radio, Space, DatePicker, Form, Select } from "antd";

const { RangePicker } = DatePicker;

const classesNames = [
  { label: "Economy", value: "Economy" },
  { label: "Premium Economy", value: "Premium Economy" },
  { label: "Business", value: "Business" },
];

const optionsDestination = [
  { label: "Delhi", value: "Delhi" },
  { label: "Vishakapatnam", value: "Vishakapatnam" },
  { label: "Chennai", value: "Chennai" },
];

const passengersTypes = [
  {
    label: "Adult",
    value: "adult",
  },
  {
    label: "Children",
    value: "child",
  },
  {
    label: "Infants",
    value: "infant",
  },
];

const BookingForm = () => {
  const [form] = Form.useForm();
  const [passengers, setPassengers] = useState({
    child: 0,
    infants: 0,
    adult: 0,
  });
  const [selectedPassengers, setSelectedPassengers] = useState([]);

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onClickAdd = (e, passenger) => {
    e?.stopPropagation();
    setPassengers((prev) => ({ ...prev, [passenger]: prev[passenger] + 1 }));
    updateSelectedPassengers();
  };

  const onClickMinus = (e, passenger) => {
    e?.stopPropagation();
    setPassengers((prev) => ({
      ...prev,
      [passenger]: Math.max(prev[passenger] - 1, 0),
    }));
    updateSelectedPassengers();
  };

  const updateSelectedPassengers = () => {
    const selected = [];
    passengersTypes.forEach((passenger) => {
      if (passengers[passenger.value] > 0) {
        selected.push(passenger.value);
      }
    });
    setSelectedPassengers(selected);
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission logic here
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const passengersSelect = (
    <Select
      mode="multiple"
      placeholder="Select Passengers"
      style={{
        width: "100%",
      }}
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      value={selectedPassengers}
    >
      {passengersTypes.map((passenger) => (
        <div>
          <Select.Option
            key={passenger.value}
            value={`${passenger} ${passenger.value}`}
          >
            <div className="flex justify-between items-center">
              {passenger.label} {passengers[passenger.value]}
            </div>
          </Select.Option>
          {/* <div className="flex items-center">
            <SubtractAlt onClick={(e) => onClickMinus(e, passenger.value)} />
            <AddFilled onClick={(e) => onClickAdd(e, passenger.value)} />
          </div> */}
        </div>
      ))}
    </Select>
  );

  return (
    <div className="w-screen h-screen bg-zinc-100">
      <div className="m-auto flex items-center justify-center">
        <Form
          form={form}
          onFinish={onFinish}
          className="flex flex-col border-solid border-2 border-slate-200 w-2/4 p-4"
        >
          <div className="flex flex-row justify-between">
            <div className="text-blue-900">Hi, where would you like to go?</div>
            <Form.Item name="expressEntry" valuePropName="checked">
              <Checkbox>Express entry</Checkbox>
            </Form.Item>
          </div>
          <div className="h-px bg-gray-300 my-6 md:my-4" />
          <div className="pb-6 md:pb-4">
            <Form.Item name="bookFlights" initialValue={true}>
              <Radio>Book flights</Radio>
            </Form.Item>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <Space.Compact size="large">
                <Form.Item name="from" className="p-0 m-0">
                  <Select
                    showSearch
                    placeholder="From"
                    suffixIcon={<WatsonHealthImageAvailabilityLocal />}
                    optionFilterProp="children"
                    style={{
                      width: 200,
                    }}
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={optionsDestination}
                  />
                </Form.Item>
                <Form.Item name="to" className="p-0 m-0">
                  <Select
                    showSearch
                    placeholder="To"
                    suffixIcon={<WatsonHealthImageAvailabilityLocal />}
                    optionFilterProp="children"
                    style={{
                      width: 200,
                    }}
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={optionsDestination}
                  />
                </Form.Item>
              </Space.Compact>
            </div>
            <div
              className={`flex ${
                form.getFieldValue("from") ? "items-start" : "flex-row"
              }`}
            >
              <Form.Item name="dateRange">
                <RangePicker placeholder={["Depart Date", "Return Date"]} />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-4/12">
              <div className="flex flex-row w-full">
                <Form.Item name="class">
                  <Select
                    placeholder="CLASS"
                    optionFilterProp="children"
                    style={{
                      width: 200,
                    }}
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={classesNames}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col w-4/12">
              <div className="flex flex-row w-full">
                <Form.Item name="Passengers">{passengersSelect}</Form.Item>
              </div>
            </div>
            <div className="mt-6">
              <Button size="large" htmlType="submit">
                Search
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
