import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-0">
        <a href className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Safety</span>First
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav m-auto py-4">
            <Link to="/SafetyFirst/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/SafetyFirst/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/SafetyFirst/services" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/SafetyFirst/guards" className="nav-item nav-link">
              Guards
            </Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu text-capitalize">
                <Link to="/SafetyFirst/blog-grid" className="dropdown-item">
                  Blog Grid
                </Link>
                <Link to="/SafetyFirst/blog-details" className="dropdown-item">
                  Blog Detail
                </Link>
              </div>
            </div>
            <Link to="/SafetyFirst/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
