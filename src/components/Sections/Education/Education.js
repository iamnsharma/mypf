import React from "react";
import { Fade } from "react-reveal";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      title: "Matriculation",
      institution: "PSEB",
      year: "2016-2017",
    },
    {
      title: "Senior Secondary",
      institution: "PSEB",
      year: "2018-2019",
    },
    {
      title: "BCA",
      institution: "PU",
      year: "2019-2022",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-container">
          {educationData.map((item, index) => (
            <Fade key={index} bottom delay={index * 200}>
              <div
                className={"education-card even-card"}>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <p>{item.year}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
