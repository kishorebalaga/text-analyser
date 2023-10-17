import React, { useState } from "react";

const InputDropdown = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Another Option 1",
    "Another Option 2",
    "Another Option 3",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Clear the selected option when the user types
    setSelectedOption(null);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setSelectedOption(option);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to filter options"
        className="p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />

      {inputValue && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
          {filteredOptions.map((option) => (
            <div
              key={option}
              className={`p-2 cursor-pointer ${
                selectedOption === option ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
