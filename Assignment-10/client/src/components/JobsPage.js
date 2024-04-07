import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/jobs/get");
        setJobs(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" mt={3} mb={3} align="center">Available Jobs</Typography>
      <List>
        {jobs.map((job) => (
          <ListItem key={job._id}>
            <ListItemText primary={job.jobTitle} secondary={job.companyName} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default JobsPage;
