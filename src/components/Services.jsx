import React from "react";
import ReactDOM from "react-dom";
import SectionHeader from "./SectionHeader";
import Service from "./Service";
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: [
        "fas fa-phone-square-alt",
        "fas fa-school",
        "fas fa-sms",
        "fas fa-coffee",
        "fas fa-user-friends",
        "fab fa-elementor",
      ],
      name: [
        "Say Hi via phone number",
        "Find homies at the same university",
        "Messengers - saviors",
        "Meet up and work",
        "Who's your babysitter ?",
        "Tutor - save the day",
      ],
      describe: [
        "This service is use your phone number and your request to find who is the most suitable ones to match with you",
        "Stuck with homework or project at university? Don't worry, there are many people like you ! ",
        "If you're shy to phone a stranger, we have another way to help you: via messengers. Trust me, it would help a lot people",
        "Have a day at coffee and to work alone is so boring ? How about a strange friend to talk ?",
        "And yes, we do provide babysitter services. Just fill your requires in, and we will do the rest",
        "Dont know how to get through the final exam this semester? Our tutor is right here !",
      ],
      price: ["$2", "$40", "$300", "$5", "$15", "$19"],
    };
  }
  render() {
    const { icon, name, describe, price } = this.state;
    return (
      <div style={{ backgroundColor: "#f5f8fd" }}>
        <div className="container">
          <SectionHeader
            headerName="Our services"
            headerDescribe="Here are our services - Let's find which one is the most suitable one for you"
          />
          <div className="row">
            {icon.map((item, i) => {
              return (
                <Service
                  icon={item}
                  name={name[i]}
                  describe={describe[i]}
                  price={price[i]}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
