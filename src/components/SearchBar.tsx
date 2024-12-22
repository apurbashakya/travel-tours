"use client";
import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Local recommendation list
  const recommendationList = [
    "Paris, France",
    "Rome, Italy",
    "Barcelona, Spain",
    "Tokyo, Japan",
    "Dubai, UAE",
    "New York, USA",
    "Sydney, Australia",
  ];

  // Handle destination input change
  const handleDestinationChange = (e) => {
    const input = e.target.value;
    setDestination(input);

    // Filter recommendations
    if (input.length > 0) {
      const filtered = recommendationList.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  // Select recommendation
  const selectRecommendation = (item) => {
    setDestination(item);
    setShowDropdown(false);
  };

  // Search function
  const handleSearch = () => {
    console.log("Search for:", destination, "on", date);
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 border rounded-[100px] px-10 py-10">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Destination Input */}
          <div className="flex-1 relative">
            <div className="flex items-center border rounded-md p-3 mt-1 hover:shadow-md transition">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={handleDestinationChange}
                placeholder="Where to?"
                className="w-full outline-none"
              />
            </div>

            {/* Dropdown Suggestions */}
            {showDropdown && (
              <ul className="absolute bg-white shadow-md mt-1 rounded-md w-full z-10">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => selectRecommendation(item)}
                    className="p-2 hover:bg-gray-100 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Date Input */}
          <div className="flex-1">
            <div className="flex items-center border rounded-md p-3 mt-1 hover:shadow-md transition">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <input
                id="date"
                type={isDateFocused ? "date" : "text"} // Toggle between text and date
                value={date}
                onFocus={() => setIsDateFocused(true)} // Show date picker on focus
                onBlur={() => setIsDateFocused(date !== "")} // Keep date picker if a value exists
                onChange={(e) => setDate(e.target.value)}
                placeholder="When?"
                className="w-full outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              <FaSearch className="inline-block mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

