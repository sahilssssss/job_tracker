import React, { useEffect, useState, useCallback } from "react";
import api from "./api";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import JobFilter from "./components/JobFilter";
import StatusCounter from "./components/StatusCounter";
import "./styles/App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showJobs, setShowJobs] = useState(false); // hide all jobs by default

  // Memoize the fetchJobs function to avoid re-creating it on every render
  const fetchJobs = useCallback(async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
      if (showJobs) {
        setFilteredJobs(res.data);
      } else {
        setFilteredJobs([]); // Hide if toggle is off
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  }, [showJobs]); // Dependency array includes showJobs to re-run when showJobs changes

  // Effect to fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]); // Use the memoized fetchJobs function

  const updateJob = async (id, data) => {
    try {
      await api.put(`/jobs/${id}`, data);
      fetchJobs();
    } catch (err) {
      console.error("Error updating job:", err);
    }
  };

  const deleteJob = async (id) => {
    try {
      await api.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  const filterJobs = ({ status, date }) => {
    let filtered = [...jobs];

    if (status) {
      filtered = filtered.filter((job) => job.status === status);
    }

    if (date) {
      const selectedDate = new Date(date);
      filtered = filtered.filter((job) => new Date(job.date) >= selectedDate);
    }

    setFilteredJobs(filtered);
  };

  const handleToggleShowAll = () => {
    setShowJobs(!showJobs);
    setFilteredJobs(showJobs ? [] : jobs); // Toggle job visibility based on showJobs state
  };

  // Count jobs by status
  const getStatusCounts = () => {
    const counts = { Applied: 0, Interview: 0, Offer: 0, Rejected: 0 };
    jobs.forEach((job) => {
      if (counts[job.status] !== undefined) {
        counts[job.status]++;
      }
    });
    return counts;
  };

  const handleStatusClick = (status) => {
    const filtered = jobs.filter((job) => job.status === status);
    setFilteredJobs(filtered);
  };

  return (
    <div className="app-container">
      <h1>Student Job Tracker</h1>

      <StatusCounter
        counts={getStatusCounts()}
        onFilterByStatus={handleStatusClick}
        onToggleShowAll={handleToggleShowAll}
        showJobs={showJobs}
      />

      <JobForm refreshJobs={fetchJobs} />
      <JobFilter onFilter={filterJobs} />
      <JobList jobs={filteredJobs} onUpdate={updateJob} onDelete={deleteJob} />
    </div>
  );
}

export default App;
