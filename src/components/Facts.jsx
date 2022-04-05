import React from "react";

function Facts() {
  return (
    <div className="container-fluid bg-primary my-5 py-5 text-center">
      <div className="row pt-5">
        <div className="col-lg-3 col-sm-6 mb-5">
          <h5
            className="fa fa-user-shield mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white"
            style={{ width: 50, height: 50 }}
          />
          <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
            250
          </h4>
          <h6 className="text-white m-0">Our Staff</h6>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5">
          <h5
            className="fa fa-users mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white"
            style={{ width: 50, height: 50 }}
          />
          <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
            1500
          </h4>
          <h6 className="text-white m-0">Happy Client</h6>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5">
          <h5
            className="fa fa-shield-alt mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white"
            style={{ width: 50, height: 50 }}
          />
          <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
            10000
          </h4>
          <h6 className="text-white m-0">Project Complete</h6>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5">
          <h5
            className="fa fa-award mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white"
            style={{ width: 50, height: 50 }}
          />
          <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
            25
          </h4>
          <h6 className="text-white m-0">Award Winning</h6>
        </div>
      </div>
    </div>
  );
}

export default Facts;
