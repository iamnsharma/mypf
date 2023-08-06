import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase, // Use the "solid" category icon instead
} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const skillsData = [
  {
    skill: "HTML",
    description:
      "I have expertise in creating structured and semantic web pages using HTML.",
    icon: faHtml5,
  },
  {
    skill: "CSS",
    description:
      "I am proficient in CSS and can style web pages with modern layouts.",
    icon: faCss3Alt,
  },
  {
    skill: "Bootstrap",
    description:
      "I have experience in using Bootstrap to create responsive websites.",
    icon: faBootstrap,
  },
  {
    skill: "JavaScript",
    description:
      "I am skilled in JavaScript and can create interactive web elements.",
    icon: faJs,
  },
  {
    skill: "ReactJS",
    description:
      "I am proficient in ReactJS and can build scalable web applications.",
    icon: faReact,
  },
  {
    skill: "React Native",
    description:
      "I have expertise in creating cross-platform mobile apps with React Native.",
    icon: faReact,
  },
  {
    skill: "ExpressJS",
    description:
      "I have experience in building server-side applications with ExpressJS.",
    icon: faNodeJs,
  },
  {
    skill: "MongoDB",
    description:
      "I am skilled in using MongoDB to store and manage data in applications.",
    icon: faDatabase,
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (index) => {
    setSelectedSkill(index === selectedSkill ? null : index);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className={`skill-card ${
                selectedSkill === index ? "active" : ""
              }`}
              onClick={() => handleSkillClick(index)}
            >
              <div className="skill-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="skill-name">{item.skill}</div>
            </div>
          ))}
        </div>
        {selectedSkill !== null && (
          <div className="description-container">
            <div className="description-content">
              <div className="description-icon">
                <FontAwesomeIcon icon={skillsData[selectedSkill].icon} />
              </div>
              <div className="description-text">
                <h3>{skillsData[selectedSkill].skill}</h3>
                <p>{skillsData[selectedSkill].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
