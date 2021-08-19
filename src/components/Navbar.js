import React, { Component } from "react";
import "../Nav.css";
class Navbar extends Component {
  render() {
    const { home, about, skills, education, contact } = this.props;
    return (
      <div className="nav">
        <ul className="list">
          <li>
            {/* {home ? (
              <a style={{ color: "red" }} href="">
                Home
              </a>
            ) : ( */}
            <a href="">Home</a>
            {/* )} */}
          </li>
          <li>
            <a href=" ">About</a>
          </li>
          <li>
            <a href=" ">Skills</a>
          </li>
          <li>
            <a href=" ">Education</a>
          </li>
          <li>
            <a href=" ">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
