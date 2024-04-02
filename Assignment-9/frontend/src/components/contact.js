import React from "react";

function Contact() {
  return (
    <div className="container bg-light mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="lead text-center">
            Have a question or feedback? We'd love to hear from you!
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
