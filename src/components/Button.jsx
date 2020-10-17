import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/ButtonCss.css";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <a>
          <button
            type="button"
            className="btn btn-primary text-uppercase font-weight-bold border-0"
          >
            {name}
          </button>
        </a>
      </div>
    );
  }
}

export default Button;
