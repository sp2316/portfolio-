import "../App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { useState } from "react";
function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [education, setEducation] = useState(false);
  const [contact, setContact] = useState(false);

  const changeHome = (val) => {
    setHome(!val);
  };

  return (
    <div className="App">
      <div className="headers">
        <Navbar
          home={home}
          about={about}
          skills={skills}
          education={education}
          contact={contact}
        />
        <Home />
      </div>
      <About />
    </div>
  );
}

export default App;
