import React, { useState } from "react";
import { WatsonHealthImageAvailabilityLocal } from "@carbon/icons-react";
import { AddFilled, SubtractAlt } from "@carbon/icons-react";
import { Checkbox, Button, Radio, Space, DatePicker, Form, Select } from "antd";
import Recommendations from "./DestinationRecommendations";

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

const cardDetais = [
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 1",
    description: "Destination description",
  },
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 2",
    description: "Destination description",
  },
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 3",
    description: "Destination description",
  },
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 4",
    description: "Destination description",
  },
  ,
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 5",
    description: "Destination description",
  },
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 6",
    description: "Destination description",
  },
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 7",
    description: "Destination description",
  },
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 8",
    description: "Destination description",
  },
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 9",
    description: "Destination description",
  },
  ,
  {
    link: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Destination Title 10",
    description: "Destination description",
  },
];

const BookingForm = () => {
  const [form] = Form.useForm();

  const [passengers, setPassengers] = useState({
    child: 0,
    infants: 0,
    adult: 0,
  });

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const addItem = () => {};

  const onClickAdd = (e, passenger) => {
    e?.stopPropagation();
    switch (passenger) {
      case "child":
        setPassengers({ ...passengers, child: passengers.child + 1 });
        break;
      case "adult":
        setPassengers({ ...passengers, adult: passengers.adult + 1 });
        break;

      case "infants":
        setPassengers({ ...passengers, infants: passengers.infants + 1 });
        break;
    }
  };

  const onClickMinus = (e, passenger) => {
    e?.stopPropagation();
    switch (passenger) {
      case "child":
        if (passengers.child > 0) {
          setPassengers({ ...passengers, child: passengers.child - 1 });
        }
        break;
      case "adult":
        if (passengers.adult > 0) {
          setPassengers({ ...passengers, adult: passengers.adult - 1 });
        }
        break;
      case "infants":
        if (passengers.infants > 0) {
          setPassengers({ ...passengers, infants: passengers.infants - 1 });
        }
        break;
    }
  };

  const destinationSelected = Form.useWatch("to", form);
  const ExpressEntry = Form.useWatch("expressEntry", form);

  console.log("form.getFieldsValue() ==>", form.getFieldsValue());

  const passengersTypes = [
    {
      label: (
        <div className="font-bold">
          {" "}
          <div className=" flex flex-row justify-between">
            {"Adult"}
            <div className=" flex flex-row items-center">
              <AddFilled
                onClick={(e) => onClickAdd(e, "adult")}
                color={passengers.adult === 0 ? "#F4F6FA" : "#7DA9F7"}
              />
              <div className=" px-4">{passengers.adult}</div>
              <SubtractAlt
                onClick={(e) => onClickMinus(e, "adult")}
                color={passengers.adult === 0 ? "#F4F6FA" : "#7DA9F7"}
              />
            </div>
          </div>
        </div>
      ),
      value: "adult",
    },
    {
      label: (
        <div className="font-bold">
          {" "}
          <div className=" flex flex-row justify-between">
            {"Children"}
            <div className=" flex flex-row items-center">
              <AddFilled
                onClick={(e) => onClickAdd(e, "child")}
                color={passengers.child === 0 ? "#F4F6FA" : "#7DA9F7"}
              />
              <div className=" px-4">{passengers.child}</div>
              <SubtractAlt
                onClick={(e) => onClickMinus(e, "child")}
                color={passengers.child === 0 ? "#F4F6FA" : "#7DA9F7"}
              />
            </div>
          </div>
        </div>
      ),
      value: "child",
    },
    {
      label: (
        <div className="font-bold">
          {" "}
          <div className=" flex flex-row justify-between">
            {"Infants"}
            <div className=" flex flex-row items-center">
              <AddFilled
                onClick={(e) => onClickAdd(e, "infants")}
                color={passengers.infants === 0 ? "#F4F6FA" : "#7DA9F7"}
              />
              <div className="px-4">{passengers.infants}</div>
              <SubtractAlt
                onClick={(e) => onClickMinus(e, "infants")}
                color={passengers.infants === 0 ? "#F4F6FA" : "#7DA9F7"}
              />
            </div>
          </div>
        </div>
      ),
      value: "infants",
    },
  ];

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission logic here
  };
  const onChange = (value) => {
    form.setFieldValue({ to: value });
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const tagRender = (props) => {
    const { value } = props;
    if (passengers[value] > 0) {
      return (
        <div className=" font-bold">
          {`${value} ${passengers[value]}, `}
          <span>&nbsp;&nbsp;</span>
        </div>
      );
    }
  };

  const expressEntryOnClick = (value) => {
    if (form?.getFieldValue(["expressEntry"])) {
      setPassengers({ adult: 1 });
      form.setFieldsValue({
        bookFlights: true,
        class: "Economy",
        from: "Delhi",
        to: "Vishakapatnam",
        Passengers: ["adult"],
      });
    }
  };

  return (
    <div className="w-screen h-screen bg-zinc-100 flex flex-col items-center justify-center">
      <div className="w-8/12 flex items-left justify-left">
        <Form
          form={form}
          onFinish={onFinish}
          className="flex flex-col border-solid border-2 border-slate-200 p-4"
          style={{ width: 1200 }}
        >
          <div className="flex flex-row justify-between">
            <div className="text-blue-900">Hi, where would like to go? </div>
            <Form.Item
              name="expressEntry"
              valuePropName="checked"
              onChange={expressEntryOnClick}
            >
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
                      width: 260,
                    }}
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[...optionsDestination]}
                  />
                </Form.Item>
                <Form.Item name="to" className="p-0 m-0">
                  <Select
                    showSearch
                    placeholder="To"
                    suffixIcon={<WatsonHealthImageAvailabilityLocal />}
                    optionFilterProp="children"
                    style={{
                      width: 260,
                      margin: 0,
                    }}
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[...optionsDestination]}
                  />
                </Form.Item>
              </Space.Compact>
            </div>

            <div>
              <Form.Item name="dateRange">
                <RangePicker
                  placeholder={["Depart Date", "Return Date"]}
                  style={{ height: 40, width: 420 }}
                />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div>
              <Form.Item name="class">
                <Select
                  placeholder="CLASS"
                  optionFilterProp="children"
                  style={{
                    width: 420,
                    height: 40,
                  }}
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[...classesNames]}
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item name="Passengers">
                <Select
                  style={{
                    width: 420,
                    height: 40,
                  }}
                  mode="multiple"
                  tagRender={tagRender}
                  placeholder="PASSENGERS"
                  options={[...passengersTypes]}
                  menuItemSelectedIcon
                />
              </Form.Item>
            </div>

            <div>
              <Button size="large" htmlType="submit">
                Search
              </Button>
            </div>
          </div>
        </Form>
      </div>
      {destinationSelected && (
        <div className="w-8/12 mt-8 flex items-center justify-center ">
          <Recommendations
            cardDetais={cardDetais}
            destination={destinationSelected}
          />
        </div>
      )}
    </div>
  );
};

export default BookingForm;
