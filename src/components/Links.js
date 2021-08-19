import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <div className="nav">
        <ul className="list">
          <li>
            <a href="https://www.linkedin.com/in/sai-prasad-palivela/">
              <i style={iconStyles} class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_saiprasad09/">
              <i style={iconStyles} class="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/sp2316">
              <i style={iconStyles} class="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100029242095899">
              <i style={iconStyles} class="fa fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const iconStyles = {
  fontSize: "1.5rem",
};
export default Links;
