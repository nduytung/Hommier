import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userfulLinks: [
        "Home",
        "About us",
        "Services",
        "Term of Services",
        "Private Policy",
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

  handleSendEmail = () => {
    alert(
      "Your messages has been sent. We will reply as soon as possible. Thank you !"
    );
  };
  render() {
    const { userfulLinks, sections } = this.state;
    return (
      <div style={{ backgroundColor: "#f5f8fd" }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-uppercase h1 font-weight-light">
                    {" "}
                    hommier{" "}
                  </p>
                  <div className="text-muted pt-3 pb-3 small">
                    <b> Duy Tung's third project</b>. I've deployed this on
                    October 17, 2020. This website has been created in order to
                    learn usages of ReactJs with Bootstrap. No commercial use on
                    this.
                  </div>

                  <p className="small mt-2 font-weight-bold text-uppercase">
                    {" "}
                    credit to
                  </p>
                  <p className=" small  pb-3">
                    I found UI design for this website at
                    https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
                    . Components are written by me, and you can feel free to
                    copy this. Contact my email if you have questions on
                    building this
                  </p>
                </div>

                <div className="col-md-6">
                  <p className="text-uppercase small font-weight-bold">
                    {" "}
                    useful links
                  </p>
                  <ul className="list-unstyled d-flex d-md-block">
                    {userfulLinks.map((i, index) => {
                      return (
                        <li className=" text-capitalize pt-1 pb-1 mr-3 text-muted">
                          <a
                            className="text-decoration-none text-muted"
                            href={sections[index]}
                          >
                            {" "}
                            {i}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="small text-uppercase font-weight-bold">
                    {" "}
                    contact
                  </p>
                  <p className="text-muted ">
                    {" "}
                    Block B, Khang Gia Apartment, District 12, Ho Chi Minh city
                  </p>
                  <p className="pt-0 mt-0 pb-0 mb-0 small text-muted text-capitalize">
                    {" "}
                    phone: +84 123456789{" "}
                  </p>
                  <p className="pt-0 mt-0 pb-0 mb-0 small text-muted  ">
                    {" "}
                    Email: nduytung.1611@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 align-items-center">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Your name"
              ></input>

              <div className="input-group mt-3">
                <input
                  className="form-control "
                  type="text"
                  placeholder="Your email"
                ></input>
                <div className="input-group-append">
                  <span className="input-group-text"> @gmail.com</span>
                </div>
              </div>

              <input
                type="text"
                className="form-control mt-3"
                placeholder="Title"
              ></input>

              <textarea
                className="form-control mt-3"
                rows="5"
                placeholder="Write something for us"
              ></textarea>

              <div className="text-center">
                <div
                  className="mx-auto mt-3 mb-3"
                  onClick={() => this.handleSendEmail()}
                >
                  {" "}
                  <Button name="send it" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
