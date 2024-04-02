import React from "react";

const jobPosts = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
    lastUpdated: "Last updated 2 days ago",
    applyLink: "https://example.com/apply/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description:
      "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
    lastUpdated: "Last updated 1 day ago",
    applyLink: "https://example.com/apply/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description:
      "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
    lastUpdated: "Last updated 4 hours ago",
    applyLink: "https://example.com/apply/ux-ui-designer",
  },
  {
    id: 4,
    title: "Data Scientist",
    description:
      "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
    lastUpdated: "Last updated 3 days ago",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 5,
    title: "Customer Support Representative",
    description:
      "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
    lastUpdated: "Last updated 6 hours ago",
    applyLink: "https://example.com/apply/customer-support-representative",
  },
  // Additional job entries
  {
    id: 6,
    title: "Software Engineer",
    description:
      "Design, develop, and deploy software solutions that drive innovation and streamline operations. Strong problem-solving skills and proficiency in multiple programming languages are required.",
    lastUpdated: "Last updated 1 hour ago",
    applyLink: "https://example.com/apply/software-engineer",
  },
  {
    id: 7,
    title: "Product Manager",
    description:
      "Lead the product development lifecycle from concept to launch. Collaborate with cross-functional teams to define product vision, strategy, and roadmap.",
    lastUpdated: "Last updated 2 days ago",
    applyLink: "https://example.com/apply/product-manager",
  },
  // Additional job entry
  {
    id: 8,
    title: "Graphic Designer",
    description:
      "Create stunning visuals and graphics for various marketing campaigns and projects. Proficiency in Adobe Creative Suite is a must.",
    lastUpdated: "Last updated 5 hours ago",
    applyLink: "https://example.com/apply/graphic-designer",
  },
];

function JobListings() {
  return (
    <div className="container-fluid bg-light text-dark py-4">
      <h1 className="text-center mb-4">Job Listings</h1>
      <div className="row">
        {jobPosts.map((job) => (
          <div key={job.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <p className="card-text">{job.lastUpdated}</p>
                <a
                  href={job.applyLink}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListings;
