import React from "react";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Container maxWidth="md" className="mt-5">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        We'd love to hear feedback from you!
        <br />
        Contact us if any other information is needed or facing any issues with Job Search
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
