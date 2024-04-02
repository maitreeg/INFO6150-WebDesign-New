import React from "react";
import jobsearch1 from "../images/TrulyHired_Career_Blog_-_11_Steps_to_a_Successful_Job_Search.jpg";
import jobsearch2 from "../images/blog_job-search-01-3.jpg";
import jobsearch3 from "../images/Career-Insights-Logo.png";
function DashboardPage() {
  return (
    <div className="container-fluid bg-light mt-5 pt-3">
      {" "}
      {/* Added pt-3 class to add top padding */}
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p className="lead text-center">
            Explore and take control of your job search journey.
          </p>
          <div className="card mb-3">
            <img src={jobsearch1} className="card-img-top" alt="Dashboard" />
            <div className="card-body">
              <h5 className="card-title">Your Job Search Overview</h5>
              <p className="card-text">
                View your recent job applications, saved job listings, and
                personalized recommendations all in one place.
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={jobsearch2} className="card-img-top" alt="Dashboard" />
            <div className="card-body">
              <h5 className="card-title">Latest Job Listings</h5>
              <p className="card-text">
                Stay up-to-date with the latest job opportunities tailored to
                your preferences.
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={jobsearch3} className="card-img-top" alt="Dashboard" />
            <div className="card-body">
              <h5 className="card-title">Career Insights</h5>
              <p className="card-text">
                Access valuable insights and trends to help you make informed
                decisions about your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
