import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

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
      <div className="row">
        {companies.map((company) => (
          <div key={company._id} className="col-md-4 mb-4">
            <div className="card">
              <Carousel>
                {company.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={`http://localhost:8000/images/${image}`}
                      alt={`Slide ${index}`}
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "200px",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="card-body text-center">
                <h5 className="card-title">{company.companyName}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyCards;
