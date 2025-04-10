import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ job, onUpdate, onDelete }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{job.company}</h3>
        <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
      </div>
      <p><strong>Role:</strong> {job.role}</p>
      <p><strong>Date:</strong> {new Date(job.date).toLocaleDateString()}</p>
      <p>
        <strong>Link:</strong>{" "}
        <a href={job.link} target="_blank" rel="noopener noreferrer">
          View Application
        </a>
      </p>
      <div className="job-card-actions">
        <button onClick={() => onUpdate(job._id, { status: "Interview" })}>Move to Interview</button>
        <button onClick={() => onUpdate(job._id, { status: "Offer" })}>Mark as Offer</button>
        <button onClick={() => onUpdate(job._id, { status: "Rejected" })}>Reject</button>
        <button onClick={() => onDelete(job._id)}>Delete</button>
      </div>
    </div>
  );
};

export default JobCard;
