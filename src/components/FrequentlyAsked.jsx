import React from "react";
import ReactDOM from "react-dom";
import SectionHeader from "./SectionHeader";
import FAQ from "./FAQ";

class FrequentlyAsked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: [
        "Are these services expensive ?",
        "What if my teammates and i are not suitable to work together ? ",
        "Do you have money-back guarantee ?",
        "What are the policies that I have to care about ?",
      ],
      answer: [
        "Up to you. Our price range is widely extended from $2 to $300. Find our coupons to get an even better deal",
        "We're very sorry if you and your new friends can't work together. This rarely happens, but if it does, we will match you and him into a new pair !",
        "With 30-day money-back guarantee on the first time using services, you can feel free to try them without worrying",
        "We're still developing, and up to now, there's no policy yet",
      ],
    };
  }
  render() {
    const { faq, answer } = this.state;
    return (
      <div className="container pb-5 mb-5">
        <SectionHeader
          headerName="Frequently asked questions "
          headerDescribe="These are frequently asked questions that we think might help you "
        />
        {faq.map((i, index) => {
          return (
            <FAQ
              name={i}
              detail="Okay this is the default text for the FAQ "
              answer={answer[index]}
            />
          );
        })}
      </div>
    );
  }
}

export default FrequentlyAsked;
