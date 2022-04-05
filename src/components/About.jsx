import React from "react";

function About() {
  return (
    <div className="container-fluid mb-5" style={{ background: "#f6f6f6" }}>
      <div className="row align-items-center">
        <div className="col-lg-6 px-0">
          <img
            width="100%"
            className="img-fluid"
            src="img/about.jpg"
            alt="Image"
          />
        </div>
        <div className="col-lg-6 py-5 py-lg-0 px-3 px-lg-5">
          <h5 className="text-primary mb-3">About Us</h5>
          <h1 className="mb-4">15 Years Experience</h1>
          <p>
            Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore
            dolore takima ipsum lorem rebum
          </p>
          <div className="row py-2">
            <div className="col-sm-6">
              <i className="flaticon-approved display-3 text-primary" />
              <h5 className="mt-2">Govt Approved</h5>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
            <div className="col-sm-6">
              <i className="flaticon-medal display-3 text-primary" />
              <h5 className="mt-2">Award Winning</h5>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
          </div>
          <a className="btn btn-lg px-4 btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
