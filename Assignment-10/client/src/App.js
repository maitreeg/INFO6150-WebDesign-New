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
import HomePage from "./components/HomePage";
import About from "./components/About";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import CompanyList from "./components/companies";
import Contact from "./components/contact";
import AdminPage from "./components/AdminPage";
import AddJobForm from "./components/AddJobForm";
import JobsPage from "./components/JobsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} />
        <Route path="/admin/add-job" element={<ProtectedRoute element={<AddJobForm />} />} />
        <Route path="/about" element={<ProtectedRoute element={<About />} />} />
        <Route path="/home/*" element={<ProtectedRoute element={<HomePage />} />}/>
        <Route path="/joblistings" element={<ProtectedRoute element={<JobListings />} />}/>
        <Route path="/contact" element={<ProtectedRoute element={<Contact />} />}/>
        <Route path="/companies" element={<ProtectedRoute element={<CompanyList />} />}/>
        <Route path="/jobsPage" element={<ProtectedRoute element={<JobsPage />} />}/>
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
