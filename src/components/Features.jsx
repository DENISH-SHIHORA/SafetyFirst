import React from "react";

function Features() {
  return (
    <div className="container-fluid py-5 py-lg-0 feature">
      <div className="row py-5 py-lg-0">
        <div className="col-lg-4 p-0">
          <div className="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
            <i className="flaticon-policeman display-3 text-primary mr-4" />
            <div>
              <h5 className="mb-3">Professional Staff</h5>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
            <i className="flaticon-helmet display-3 text-primary mr-4" />
            <div>
              <h5 className="mb-3">Latest Equipments</h5>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="feature-item d-flex align-items-center px-5">
            <i className="flaticon-surveillance display-3 text-primary mr-4" />
            <div>
              <h5 className="mb-3">24/7 Support</h5>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
