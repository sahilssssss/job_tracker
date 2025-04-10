import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, onUpdate, onDelete }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default JobList;
