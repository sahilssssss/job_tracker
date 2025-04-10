import React, { useState } from "react";
import api from "../api";
import "../styles/JobForm.css";

const JobForm = ({ refreshJobs }) => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/jobs", form);
      refreshJobs();
      setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
    } catch (err) {
      console.error("Error adding job:", err);
      alert("Failed to add job. Please try again.");
    }
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input name="company" value={form.company} placeholder="Company" onChange={handleChange} required />
      <input name="role" value={form.role} placeholder="Role" onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <input name="link" value={form.link} placeholder="Application Link" onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
