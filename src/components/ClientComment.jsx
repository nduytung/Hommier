import React from "react";
import Client from "./Client";
import ReactDOM from "react-dom";
import SectionHeader from "./SectionHeader";
import cli1 from "../img/testimonial-2.jpg";
import cli2 from "../img/testimonial-2.jpg";
import cli3 from "../img/testimonial-2.jpg";
import cli4 from "../img/testimonial-2.jpg";
class ClientComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: [cli1, cli2, cli3, cli4],
      cliName: [
        "Timon Sithatra",
        "Tom Michaelson",
        "Tinker Hatfield",
        "Michael Jordan",
      ],
      cliCmt: [
        "One of the earliest people to try these services - and I have loved it since the very first sight !",
        "This is just a testing paragraph",
        "This is just a testing paragraph",
        "This is just a testing paragraph",
      ],
    };
  }

  render() {
    const { imgSrc, cliName, cliCmt } = this.state;
    return (
      <div className="container mb-5 pb-5">
        <SectionHeader
          headerName="Testimonials"
          headerDescribe="Since doing this, we've been receiving many response from our customers, and we're trying our best to improve our services everyday "
        />

        <Client imgSrc={imgSrc[0]} cliName={cliName[0]} cliCmt={cliCmt[0]} />

        {/* {imgSrc.map((src, i) => {
          return (
            <Client imgSrc={src} cliName={cliName[i]} cliCmt={cliCmt[i]} />
          );
        })} */}
      </div>
    );
  }
}

export default ClientComment;
