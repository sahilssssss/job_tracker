import React, { useState } from "react";
import "../styles/JobFilter.css";



const JobFilter = ({ onFilter }) => {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const handleFilter = () => {
    onFilter({ status, date });
  };

  const handleClear = () => {
    setStatus("");
    setDate("");
    onFilter({ status: "", date: "" });
  };

  return (
    <div className="job-filter">
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <input type="date" value={date} onChange={(e) => setDate(e.target.value)}  aria-label="Filter by date" />

      <button onClick={handleFilter}>Filter</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default JobFilter;
