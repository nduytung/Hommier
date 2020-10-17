import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../FA Icons/css/all.min.css";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        "Home",
        "About Us",
        "Services",
        "Customer Responses",
        "Frequently Asked",
      ],
      sections: [
        "#",
        "#about_us",
        "#services",
        "#client_comment",
        "#frequently_asked",
      ],
    };
  }

  render() {
    const { menu, sections } = this.state;
    return (
      <div className="container" id="navbar">
        <div className="row">
          <div className="w-100">
            <nav className="navbar navbar-expand-lg justify-content-between ">
              <a className=" font-weight-light text-decoration-none text-dark display-4">
                {" "}
                hommier{" "}
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i
                  class="fas fa-bars navbar-toggler-icon"
                  style={{ fontSize: "30px" }}
                ></i>
              </button>

              <div
                className="navbar-collapse collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav float-right">
                  {menu.map((item, i) => {
                    return (
                      <li className="nav-item">
                        <a
                          className="nav-link text-uppercase "
                          href={sections[i]}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
