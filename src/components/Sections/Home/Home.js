import React, { useEffect, useState } from "react";
import "../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faStackOverflow,
  faCodepen,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  // const [randomImage, setRandomImage] = useState("");

  // useEffect(() => {
  //   fetchRandomImage();
  // }, []);

  // const fetchRandomImage = () => {
  //   // Generate a random image URL from a list of image providers
  //   const imageProviders = [
  //     "https://source.unsplash.com/random/400x400", // Adjust the image size as needed
  //     // Add more image providers here if you want to fetch from different sources
  //   ];

  //   const randomIndex = Math.floor(Math.random() * imageProviders.length);
  //   setRandomImage(imageProviders[randomIndex]);
  // };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="image-container">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGZIZi64A9MKA/profile-displayphoto-shrink_400_400/0/1688789887011?e=1697068800&v=beta&t=41IZS8GL5R5_k3PSAQJs0EJf8mQuehm6GxtHnUYxgXs"
            alt="Your Name"
            className="animated-image"
          />
        </div>
        <div className="description">
          <h1>Hi there, I am Aman Sharma</h1>
          <p>"Your limitation—it's only your imagination."</p>
          <div className="social-icons">
            <a
              href="https://github.com/iamnsharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/i_amnsharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-sharma-271670230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/i.amnsharma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/amansharma870"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://stackoverflow.com/users/17043234/aman-sharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
