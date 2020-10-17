import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import bg from "./img/intro-bg.jpg";
import "./componentCss/ButtonCss.css";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Greeting from "./components/Greeting";
import CallToAction from "./components/CallToAction";
import SectionHeader from "./components/SectionHeader";
import ClientComment from "./components/ClientComment";
import SocialMediaIcon from "./components/socialMediaIcon";
import FrequentlyAsked from "./components/FrequentlyAsked";

/* TIME: 2 WEEKS */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introParts: [
        { name: <SocialMediaIcon />, id: "social_media_icon" },
        { name: <NavBar />, id: "nav_bar" },
        { name: <Greeting />, id: "greeting" },
      ],
      sections: [
        { name: <AboutUs />, id: "about_us" },
        { name: <Services />, id: "services" },
        { name: <ClientComment />, id: "client_comment" },
        { name: <CallToAction />, id: "call_to_action" },
        { name: <FrequentlyAsked />, id: "frequently_asked" },
        { name: <Footer />, id: "footer" },
      ],
    };
  }

  render() {
    const { introParts, sections } = this.state;
    return (
      <div>
        <div className="position-absolute ">
          <img style={{ width: "100%", height: "800px" }} src={bg} />
        </div>
        <div className="position-relative">
          {introParts.map((introPart) => {
            return <div id={introPart.id}> {introPart.name} </div>;
          })}
        </div>

        {sections.map((section) => {
          return <div id={section.id}> {section.name} </div>;
        })}
      </div>
    );
  }
}

export default App;
