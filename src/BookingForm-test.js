// BookingForm.js

import React, { useState } from "react";
import DestinationRecommendations from "./DestinationRecommendations";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: 1,
    expressEntry: false,
  });

  const [selectedDestination, setSelectedDestination] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDestinationChange = (event) => {
    const destination = event.target.value;
    setSelectedDestination(destination);
    setShowRecommendations(true);
    // You can implement logic here to fetch recommendations based on the selected destination
    // For simplicity, we'll assume you have a function getRecommendations(destination)
  };

  const handleAutofillFrom = () => {
    // You can implement logic here to autofill the "From" based on user preferences or data
    // For simplicity, we'll use a static value
    setFormData((prevData) => ({
      ...prevData,
      from: "Your Location", // Replace with actual autofill logic
    }));
  };

  const handleExpressEntryChange = (event) => {
    const expressEntry = event.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      expressEntry,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For simplicity, we're logging the form data to the console
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full md:w-96">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Singapore Airlines Booking
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-600"
            >
              Flying From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleAutofillFrom}
            />
          </div>
          <div>
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-600"
            >
              Flying To
            </label>
            <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleDestinationChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {showRecommendations && (
              <DestinationRecommendations destination={selectedDestination} />
            )}
          </div>
          <div>
            <label
              htmlFor="departDate"
              className="block text-sm font-medium text-gray-600"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departDate"
              name="departDate"
              value={formData.departDate}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="returnDate"
              className="block text-sm font-medium text-gray-600"
            >
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="passengers"
              className="block text-sm font-medium text-gray-600"
            >
              Passengers
            </label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="expressEntry" className="flex items-center">
              <input
                type="checkbox"
                id="expressEntry"
                name="expressEntry"
                checked={formData.expressEntry}
                onChange={handleExpressEntryChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600">
                Express Entry
              </span>
            </label>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
