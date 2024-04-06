import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import aboutData from "./AboutData";

function About() {
  return (
    <Container maxWidth="md" className="mt-5">
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      {aboutData.map((item, index) => (
        <Card key={index} className="mb-3">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body1" align="justify">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default About;
