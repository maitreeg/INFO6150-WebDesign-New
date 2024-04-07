// import React from "react";
// import { connect } from 'react-redux';
// import { Container, Typography, Card, CardContent, Button } from "@mui/material";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const jobPosts = [
//   {
//     id: 1,
//     title: "Full Stack Developer",
//     description:
//       "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
//     lastUpdated: "Last updated 2 days ago",
//     applyLink: "https://example.com/apply/full-stack-developer",
//   },
//   {
//     id: 2,
//     title: "Digital Marketing Specialist",
//     description:
//       "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
//     lastUpdated: "Last updated 1 day ago",
//     applyLink: "https://example.com/apply/digital-marketing-specialist",
//   },
//   {
//     id: 3,
//     title: "UX/UI Designer",
//     description:
//       "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
//     lastUpdated: "Last updated 4 hours ago",
//     applyLink: "https://example.com/apply/ux-ui-designer",
//   },
//   {
//     id: 4,
//     title: "Data Scientist",
//     description:
//       "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
//     lastUpdated: "Last updated 3 days ago",
//     applyLink: "https://example.com/apply/data-scientist",
//   },
//   {
//     id: 5,
//     title: "Customer Support Representative",
//     description:
//     "Design, develop, and deploy software solutions that drive innovation and streamline operations. Strong problem-solving skills and proficiency in multiple programming languages are required.",
//     lastUpdated: "Last updated 6 hours ago",
//     applyLink: "https://example.com/apply/customer-support-representative",
//   },
//   // Additional job entries
//   {
//     id: 6,
//     title: "Software Engineer",
//     description:
//       "Design, develop, and deploy software solutions that drive innovation and streamline operations. Strong problem-solving skills and proficiency in multiple programming languages are required.",
//     lastUpdated: "Last updated 1 hour ago",
//     applyLink: "https://example.com/apply/software-engineer",
//   },
//   {
//     id: 7,
//     title: "Product Manager",
//     description:
//       "Lead the product development lifecycle from concept to launch. Collaborate with cross-functional teams to define product vision, strategy, and roadmap.",
//     lastUpdated: "Last updated 2 days ago",
//     applyLink: "https://example.com/apply/product-manager",
//   },
//   // Additional job entry
//   {
//     id: 8,
//     title: "Graphic Designer",
//     description:
//       "Create stunning visuals and graphics for various marketing campaigns and projects. Proficiency in Adobe Creative Suite is a must.",
//     lastUpdated: "Last updated 5 hours ago",
//     applyLink: "https://example.com/apply/graphic-designer",
//   },
//   {
//     id: 9,
//     title: "Full Stack Developer",
//     description:
//       "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
//     lastUpdated: "Last updated 2 days ago",
//     applyLink: "https://example.com/apply/full-stack-developer",
//   },
//   {
//     id: 10,
//     title: "Digital Marketing Specialist",
//     description:
//       "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
//     lastUpdated: "Last updated 1 day ago",
//     applyLink: "https://example.com/apply/digital-marketing-specialist",
//   },
//   {
//     id: 11,
//     title: "UX/UI Designer",
//     description:
//       "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
//     lastUpdated: "Last updated 4 hours ago",
//     applyLink: "https://example.com/apply/ux-ui-designer",
//   },
//   {
//     id: 12,
//     title: "Data Scientist",
//     description:
//       "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
//     lastUpdated: "Last updated 3 days ago",
//     applyLink: "https://example.com/apply/data-scientist",
//   },
//   {
//     id: 13,
//     title: "Customer Support Representative",
//     description:
//       "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
//     lastUpdated: "Last updated 6 hours ago",
//     applyLink: "https://example.com/apply/customer-support-representative",
//   },
//   // Additional job entries
//   {
//     id: 14,
//     title: "Software Engineer",
//     description:
//       "Design, develop, and deploy software solutions that drive innovation and streamline operations. Strong problem-solving skills and proficiency in multiple programming languages are required.",
//     lastUpdated: "Last updated 1 hour ago",
//     applyLink: "https://example.com/apply/software-engineer",
//   },
//   {
//     id: 15,
//     title: "Product Manager",
//     description:
//       "Lead the product development lifecycle from concept to launch. Collaborate with cross-functional teams to define product vision, strategy, and roadmap.",
//     lastUpdated: "Last updated 2 days ago",
//     applyLink: "https://example.com/apply/product-manager",
//   },
//   // Additional job entry
//   {
//     id: 16,
//     title: "Graphic Designer",
//     description:
//       "Create stunning visuals and graphics for various marketing campaigns and projects. Proficiency in Adobe Creative Suite is a must.",
//     lastUpdated: "Last updated 5 hours ago",
//     applyLink: "https://example.com/apply/graphic-designer",
//   },


// ];

// function JobListings() {
//   const handleApplyNow = (applyLink, title) => {
//     toast.success(`Applied for ${title} successfully!`);
//   };
//   return (
//     <Container maxWidth="md" className="mt-5 pt-3">
//       <Typography variant="h4" align="center" gutterBottom>
//         Job Listings
//       </Typography>
//       <div className="row">
//         {jobPosts.map((job) => (
//           <div key={job.id} className="col-md-6 mb-4">
//             <Card>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {job.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" gutterBottom>
//                   {job.lastUpdated}
//                 </Typography>
//                 <Typography variant="body1" component="p">
//                   {job.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleApplyNow(job.applyLink, job.title)}
//                 >
//                   Apply Now
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// }


// const mapStateToProps = (state) => ({
//   jobPosts: state.jobs // Assuming you have a 'jobs' reducer in your Redux store
// });

// export default connect(mapStateToProps)(JobListings);










import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Card, CardContent, Grid, CardHeader, List, ListItem, ListItemText } from '@mui/material';

function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/jobs/get");
        setJobs(response.data);
        console.log(response.data, "Hi There")
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" mt={3} mb={3} align="center">Available Jobs</Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} key={job._id}>
            <Card>
              <CardHeader
                title={`${job.jobTitle} at ${job.companyName}`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: {job.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Salary: {job.salary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

}

export default JobsPage;



