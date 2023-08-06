import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            {/* Add your profile image here */}
            {/* Example: <img src="profile.jpg" alt="Your Name" /> */}
          </div>
          <div className="about-text">
            <p>
              Hi there! I'm Aman Sharma, a passionate and enthusiastic web
              developer based in Punjab, India. I have a strong background in
              HTML, CSS, and JavaScript, and I'm constantly exploring new
              technologies and frameworks to improve my skills.
            </p>
            <p>
              I am experienced in building responsive and user-friendly
              websites/applications using modern web/app technologies. My goal
              is to create innovative and efficient solutions to real-world
              problems and deliver high-quality products that exceed clients'
              expectations.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest trends
              in web/app development, reading tech blogs, or working on personal
              projects. I believe in continuous learning and I'm always open to
              new opportunities and challenges in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
