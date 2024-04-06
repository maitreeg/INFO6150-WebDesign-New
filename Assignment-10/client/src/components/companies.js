import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function CompanyCards() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/user/getAllCompanies"
        );
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container-fluid bg-light pt-4">
      {companies.map((company) => (
        <div key={company._id}>
          <Typography variant="h5" gutterBottom align="center">
            {company.companyName}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {company.images.map((image, index) => (
              <Grid item key={index} xs={12} sm={8} md={4}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    image={`http://localhost:8000/images/${image}`}
                    alt={`Company ${company.companyName} Image ${index + 1}`}
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    {/* You can add additional content here if needed */}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default CompanyCards;
