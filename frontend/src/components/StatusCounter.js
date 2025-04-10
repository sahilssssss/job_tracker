// src/components/StatusCounter.jsx
import React from "react";
import "../styles/StatusCounter.css";

const StatusCounter = ({ counts, onFilterByStatus, onToggleShowAll, showJobs }) => {
const statuses = ["Applied", "Interview", "Offer", "Rejected"];

  return (
    <div className="status-counter">
      {statuses.map((status) => (
        <div
          key={status}
          className="status-box"
          onClick={() => onFilterByStatus(status)}
        >
          <p>{status}</p>
          <span>{counts[status]}</span>
        </div>
      ))}
      <button className="show-all-btn" onClick={onToggleShowAll}>
        {showJobs ? "Hide All Jobs" : "Show All Jobs"}
      </button>
    </div>
  );
};

export default StatusCounter;
