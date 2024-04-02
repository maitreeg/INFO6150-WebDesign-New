import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import jobSearchLogo from "../images/logo.jpeg";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/user/authenticate",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        sessionStorage.setItem("user", JSON.stringify(userData));
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Internal server error");
    }
  };

return (
  <Container maxWidth="sm">
    <Box mt={5} mb={4} textAlign="center">
      <img
        src={jobSearchLogo}
        alt="Job Search Logo"
        style={{ maxWidth: "1200px", height: "200px" }}
      />
      <Typography variant="h4" mt={3}>Lets Start with your Job Search</Typography>
      <Typography variant="body1" color="textSecondary">Your career opportunities</Typography>
    </Box>
    <form onSubmit={handleSubmit}>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        margin="normal"
      />
      <Box mt={2} textAlign="center">
        <Button variant="contained" color="primary" type="submit">Login</Button>
      </Box>
    </form>
  </Container>
);
}



export default LoginPage;
