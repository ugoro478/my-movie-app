// src/component/Filter.jsx
import React from "react";

const Filter = ({ filterTitle, filterRate, setFilterTitle, setFilterRate }) => (
  <div className="flex gap-4 mb-6">
    <input
      type="text"
      placeholder="Search by title"
      value={filterTitle}
      onChange={(e) => setFilterTitle(e.target.value)}
      className="p-2 border rounded-md w-1/2"
    />
    <input
      type="number"
      placeholder="Minimum rating"
      value={filterRate}
      onChange={(e) => setFilterRate(e.target.value)}
      className="p-2 border rounded-md w-1/2"
    />
  </div>
);

export default Filter;
