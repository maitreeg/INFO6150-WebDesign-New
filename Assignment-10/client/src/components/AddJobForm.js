import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from '@mui/material';

function AddJobForm() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/user/create/job",
        {
          companyName,
          jobTitle,
          description,
          salary
        }
      );

      if (response.status === 201) {
        setError("");
        // Clear form fields
        setCompanyName("");
        setJobTitle("");
        setDescription("");
        setSalary("");
        alert("Job created successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Internal server error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <TextField
        id="companyName"
        label="Company Name"
        variant="outlined"
        fullWidth
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        id="jobTitle"
        label="Job Title"
        variant="outlined"
        fullWidth
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        id="description"
        label="Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        id="salary"
        label="Salary"
        variant="outlined"
        fullWidth
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
        margin="normal"
      />
      <Box mt={2} textAlign="center">
        <Button variant="contained" color="primary" type="submit">Add Job</Button>
      </Box>
    </form>
  );
}

export default AddJobForm;
