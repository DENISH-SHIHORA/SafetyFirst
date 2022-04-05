import React from "react";

function Carousel() {
  return (
    <div className="container-fluid p-0">
      <div id="blog-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-primary m-0">Your Safety, Our Efforts</h4>
              <h4 className="display-4 m-0 mt-2 mt-md-3 text-white">
                Best Security Service
              </h4>
              <a className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">
                Learn More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h4 className="text-primary m-0">Your Safety, Our Efforts</h4>
              <h4 className="display-4 m-0 mt-2 mt-md-3 text-white">
                Highly Trained Guards
              </h4>
              <a className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#blog-carousel"
          data-slide="prev"
        >
          <div
            className="btn btn-primary rounded-circle"
            style={{ width: 45, height: 45 }}
          >
            <span className="carousel-control-prev-icon mb-n2" />
          </div>
        </a>
        <a
          className="carousel-control-next"
          href="#blog-carousel"
          data-slide="next"
        >
          <div
            className="btn btn-primary rounded-circle"
            style={{ width: 45, height: 45 }}
          >
            <span className="carousel-control-next-icon mb-n2" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
