import React, { Component } from "react";
import "../Nav.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: true,
    };
  }

  render() {
    return (
      <div className="nav">
        <ul className="list">
          <li>
            <a href="#home">Home</a>
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
