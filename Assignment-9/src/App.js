import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import About from "./components/About";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import CompanyList from "./components/companies";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<ProtectedRoute element={<About />} />} />
        <Route
          path="/dashboard/*"
          element={<ProtectedRoute element={<DashboardPage />} />}
        />
        <Route
          path="/joblistings"
          element={<ProtectedRoute element={<JobListings />} />}
        />
        <Route
          path="/contact"
          element={<ProtectedRoute element={<Contact />} />}
        />
        <Route
          path="/companies"
          element={<ProtectedRoute element={<CompanyList />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ element }) {
  const location = useLocation();
  const isAuthenticated = sessionStorage.getItem("user");

  // Check if the current location is not the login page and user is authenticated
  if (location.pathname !== "/" && isAuthenticated) {
    return (
      <>
        <Navbar />
        {element}
      </>
    );
  }

  // If user is not authenticated, redirect to login page
  return <Navigate to="/" />;
}

export default App;
