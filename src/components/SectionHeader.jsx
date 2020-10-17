import React from "react";
import ReactDOM from "react-dom";

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerName: this.props.headerName,
      headerDescribe: this.props.headerDescribe,
    };
  }

  render() {
    return (
      <div
        className="container mt-2 p-5 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="h1 text-center font-weight-bold text-muted">
          {this.state.headerName}
        </p>
        {() => this.checkOutState()}
        <p className="text-muted lead text-center ">
          {this.state.headerDescribe}
        </p>
      </div>
    );
  }
}

export default SectionHeader;
