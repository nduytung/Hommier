import React from "react";
import ReactDOM from "react-dom";

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: this.props.imgSrc,
      cliName: this.props.cliName,
      cliCmt: this.props.cliCmt,
    };
  }

  render() {
    const { imgSrc, cliName, cliCmt } = this.state;
    return (
      <div
        className="container align-items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className=" col-12 col-md-8 b-block mx-auto">
          <div className="media">
            <img
              src={imgSrc}
              className="mr-3 d-block rounded-circle"
              style={{ width: "100px" }}
            />
            <div className="media-body">
              <h4> {cliName} </h4>
              <i>{cliCmt}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
