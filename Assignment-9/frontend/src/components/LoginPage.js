import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jobquestLogo from "../images/364096.png";

function LoginPage() {
  const [email, setEmail] = useState("gawande.m@northeastern.edu");
  const [password, setPassword] = useState("Maitree123");
  const [error, setError] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      history("/dashboard");
    }
  }, [history]);

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
        history("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Internal server error");
    }
  };

  return (
    <div className="container-fluid bg-light py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img
              src={jobquestLogo}
              alt="JobQuest Logo"
              style={{ maxWidth: "200px" }}
            />
            <h2 className="mt-3">Welcome Back to JobQuest</h2>
            <p className="text-muted">Your gateway to career opportunities</p>
          </div>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
