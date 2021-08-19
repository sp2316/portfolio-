import React from "react";
import "../Home.css";
import Links from "./Links";
function Home(props) {
  return (
    <div style={styles} className="home" id="home">
      <div id="home-content">
        <h1>Hi, I am Sai Prasad</h1>
        <h3>
          Welcome to my Portfolio. I'm a <b>Computer science graduate</b> from
          Hyderabad,India. I love to <b>design web pages</b>. Let's start
          scrolling and learn more about me.
        </h3>
        <Links />
      </div>
    </div>
  );
}

const styles = {
  // paddingTop: "100px",
  textAlign: "center",
  color: "grey",
};

export default Home;
