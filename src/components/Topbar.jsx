import React from "react";

function Topbar() {
  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-2 px-lg-5">
        <div className="col-lg-6 text-center text-lg-left">
          <div className="d-inline-flex align-items-center">
            <p className="mr-2 mb-2 mb-lg-0 text-white">Opening Hours:</p>
            <span className="mb-2 mb-lg-0 text-white">8.00AM - 9.00PM</span>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <p className="m-0 mr-1 text-white">Follow Us:</p>
            <a className="text-white px-2" >
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-white px-2" >
              <i className="fab fa-twitter" />
            </a>
            <a className="text-white px-2" >
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-white px-2" >
              <i className="fab fa-instagram" />
            </a>
            <a className="text-white px-2" >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="row py-3 px-lg-5">
        <div className="col-lg-4">
          <a  className="navbar-brand d-none d-lg-block">
            <h1 className="m-0 display-5 text-capitalize font-italic">
              <span className="text-primary">Safety</span>First
            </h1>
          </a>
        </div>
        <div className="col-lg-8 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <div className="d-inline-flex flex-column text-center pr-3 border-right">
              <h6>Our Office</h6>
              <p className="m-0">123 Street, NY, USA</p>
            </div>
            <div className="d-inline-flex flex-column text-center px-3 border-right">
              <h6>Email Us</h6>
              <p className="m-0">info@example.com</p>
            </div>
            <div className="d-inline-flex flex-column text-center pl-3">
              <h6>Call Us</h6>
              <p className="m-0">+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
