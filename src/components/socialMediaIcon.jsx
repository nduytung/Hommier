import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../FA Icons/css/all.min.css";
class SocialMediaIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: ["linkedin", "facebook", "instagram"],
      pageList: [
        "https://www.linkedin.com/in/duy-tung-nguyen-413647198/",
        "https://www.facebook.com/Rye1611/",
        "https://www.instagram.com/rye.16.11/",
      ],
    };
  }

  render() {
    const { listItem, pageList } = this.state;
    return (
      <div className="container text-right">
        {listItem.map((item, index) => {
          return (
            <a
              href={pageList[index]}
              class="btn-floating btn-lg btn-tw"
              type="button"
              role="button"
            >
              <i class={"fab fa-" + item + " text-dark small"}> </i>
            </a>
          );
        })}
      </div>
    );
  }
}

export default SocialMediaIcon;
