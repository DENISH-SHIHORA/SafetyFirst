import React from "react";

function Subscribe() {
  return (
    <div className="container-fluid bg-primary my-5 py-5 text-center">
      <h1 className="text-white font-weight-bold mt-5 mb-3">
        Subscribe Our Newsletter
      </h1>
      <p className="text-white mb-4">
        Subscribe and get Our latest article in your inbox
      </p>
      <form className="form-inline justify-content-center mb-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control-lg"
            placeholder="Your Email"
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
