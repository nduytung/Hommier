import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import introBg from "../img/intro-img.png";
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{ marginTop: "100px" }}
        className="container mt-5 pt-5 mb-5 pb-5 "
      >
        <div className="row ">
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <p className="mb-5 h2 display-4 font-weight-bold color text-dark">
              {" "}
              Find new reliable mates for your{" "}
              <div className="text-primary"> teamwork projects </div>
            </p>
            <div
              className="float-left"
              onClick={() => window.location.reload(true)}
            >
              <Button name={"get started"} />
            </div>
          </div>

          <div
            className="d-none d-md-block col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img className="d-block w-75 float-right" src={introBg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;
