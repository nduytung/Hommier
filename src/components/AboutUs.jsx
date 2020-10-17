import React from "react";
import ReactDOM from "react-dom";

import aboutUsBg from "../img/about-img.jpg";
import SectionHeader from "./SectionHeader";
class AboutUs extends React.Component {
  render() {
    return (
      <div
        style={{ paddingTop: "70px" }}
        className="bg-white position-relative pt-5 pb-5"
      >
        <div className="container ">
          <div className="row justify-content-between">
            <div
              className="col-md-4 "
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <img
                className="about-img d-block float-left mw-100 pt-5"
                src={aboutUsBg}
                alt=""
              />
            </div>
            <div
              className="col-12 col-md-7 "
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <SectionHeader
                headerName="About us"
                headerDescribe="Young, mentally-retarded and dare to do - That's what we are"
              />
              <p className="text-muted lead h2">
                {" "}
                <em>
                  "I can't find soulmates to finish a project", "My deadline is
                  near and I still can't find a budd to work with", "My teammate
                  is too lazy, I just want to kick him out". Yes. We know. We
                  created this to solve your problem
                </em>
              </p>
              <p className="mt-4">
                Since I was in highschool, I has always been wondering how to
                find a "matching" teammate. I try many ways, but none of them
                worked. And I realized one thing: The problem is not because
                there is nobody feels like me. It just because I and them don't
                know each other, as well as we dont have a
                good-enough-aqquantaince to work together.
              </p>
              <p>
                So, two years later from then, I created this - the website can
                connect you with people who have the same sense as you, as you
                guys can work together without any suspicion. Let's see if this
                works for you !
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
