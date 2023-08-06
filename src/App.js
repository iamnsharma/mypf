import React from "react";
import Header from "./components/Header/Header";
import About from "./components/Sections/About/About";
import Contact from "./components/Sections/Contact/Contact";
import Education from "./components/Sections/Education/Education";
import Home from "./components/Sections/Home/Home";
import Skills from "./components/Sections/Skills/Skills";
import WorkExperience from "./components/Sections/WorkExperience/WorkExperience";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;
