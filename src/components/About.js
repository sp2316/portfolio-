import React, { Component } from "react";
import "../About.css";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div id="profile-pic-container">
          <div id="profile-pic">
            <img src="https://images4.alphacoders.com/476/thumb-350-47698.png" />
          </div>
        </div>
        <div id="about-content">
          <div id="about-me">
            <h2>About Me</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam.
            </p>
          </div>
          <div className="contact-details">
            <h2>Contact Details</h2>
            <h3>Sai prasad</h3>
            <h3>Hyderabad,India</h3>
            <h3>+91 9182297438</h3>
            <h3>saiprasadpalivela@gmail.com</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
