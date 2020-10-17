import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "../componentCss/ServiceCss.css";

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        icon: this.props.icon,
        name: this.props.name,
        describe: this.props.describe,
        price: this.props.price,
      },
    };
  }

  notif = () => {
    alert("Tính năng hiện chưa khả dụng do dev bận thi giữa kì :)");
  };
  render() {
    const { service } = this.state;
    return (
      <div
        className="col-12 col-md-6 col-lg-4  "
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div
          id="hover"
          className="position-relative bg-white m-3 p-4 rounded shadow-sm"
        >
          <div className="text-center">
            <i
              style={{ fontSize: "35px", color: "orange" }}
              className={service.icon + " m-3"}
            ></i>
          </div>
          <h3 className="h4 p-2 text-center"> {service.name}</h3>
          <p className="text-muted ">{service.describe}</p>
          {/* pop up when hover */}
          <div
            style={{
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              opacity: "0.8",
            }}
            className=" p-5 w-100 rounded h-100 position-absolute bg-dark justify-content-center align-items-center"
            id="cover"
          >
            <p
              style={{ fontSize: "30px" }}
              className="font-weight-bold pb-5 text-white text-center"
            >
              {" "}
              Price: {service.price}
            </p>
            <div onClick={this.notif}>
              <Button style={{ opacity: "1" }} name="Join now" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
