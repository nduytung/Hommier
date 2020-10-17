import React from "react";
import ReactDOM from "react-dom";

class CallToAction extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#2d2b46" }} className="mt-5 mb-5">
        <div className="container" data-aos="zoom-in" data-aos-duration="1000">
          <div className="row pt-5 pb-4 align-items-center">
            <div className="col-12 col-md-9">
              <h2 className="h2 pb-3 text-white text-capitalize  font-weight-bold">
                {" "}
                dont know where to start? We're willing to help !
              </h2>
              <p className="text-white">
                {" "}
                Yea we know that we have create many services - which might
                confuse you. Contact us and receive advices - free, and just for
                you !
              </p>
            </div>
            <div className="col-12 col-md-3">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "3px solid white",
                }}
                className="d-block outline-none font-weight-bold pl-4 pr-4 pt-2 pb-2 float-right border-white rounded-lg text-capitalize text-white lead"
              >
                contact
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
