import React from "react";
import { Container, Typography} from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import homeImage from "../images/home.jpeg";
import homeImage2 from "../images/homeImage2.jpeg";
function HomePage() {
  return (
    <Container maxWidth="md" className="mt-5 pt-3">
      <Typography variant="h4" align="center" gutterBottom>
        Explore your job search journey with us!
      </Typography>
      <Carousel showArrows={true} infiniteLoop={true}>
        <div>
          <img src={homeImage} alt="homeImage" />
          <p className="legend">Your Job Search Overview</p>
        </div>
        <div>
          <img src={homeImage2} alt="homeImage" />
          <p className="legend">Latest Job Listings</p>
        </div>
      </Carousel>
    </Container>
  );  
}


export default HomePage;
