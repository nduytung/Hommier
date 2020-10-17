import React from "react";
import ReactDOM from "react-dom";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      displayState: null,
      answer: this.props.answer,
      icon: "+",
    };
  }

  handleClick = (index) => {
    let { icon, displayState, answer } = this.state;
    let increase, iconChange;
    if (displayState == null) {
      iconChange = "-";
      increase = answer;
    } else {
      iconChange = "+";
      increase = null;
    }
    this.setState({ displayState: increase, icon: iconChange });
  };
  render() {
    const { name, displayState, icon } = this.state;
    return (
      <div
        className="col-12 border-bottom border-dark pt-3 "
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="row justify-content-between">
          <div className="lead font-weight-bold text-capitalize text-muted">
            {name}
          </div>
          <div
            onClick={this.handleClick}
            className="h2 text-muted float-right"
            type="button"
          >
            {icon}
          </div>
        </div>
        <div className="text-left lead pb-2">{displayState}</div>
      </div>
    );
  }
}

export default FAQ;
