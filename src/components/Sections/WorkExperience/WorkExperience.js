import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import "./WorkExperience.css";

const workExperienceData = [
  {
    title: "Whatsapp UI Clone",
    description: "Whatsapp UI clone built using React Native.",
    image: "https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png",
  },
  {
    title: "Instagram UI Clone",
    description: "Instagram UI clone created with React Native.",
    image:
      "https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg",
  },
  {
    title: "My Jio UI Clone",
    description: "My Jio UI clone developed using React Native.",
    image:
      "https://cleartalking.com/main/media/reviews/photos/original/9f/a7/6a/Screenshot-20200725-184128-MyJio-51-1595682810.jpg",
  },
  {
    title: "Traya Video SDK",
    description: "Built Traya hair fall app's video functionality SDK.",
    image:
      "https://gumlet.assettype.com/barandbench%2F2023-05%2Fd921eeb4-982b-4380-9005-3934339e5913%2F17.jpg?format=auto",
  },
  {
    title: "CETA Biometrics",
    description:
      "Developed CETA biometric face recognition and location tracing for student attendance.",
    image:
      "https://image.winudf.com/v2/image1/Y29tLmNvaW52ZXJ0X3NjcmVlbl8wXzE2NTIzMDI4MTNfMDEz/screen-0.webp?fakeurl=1&type=.webp",
  },
  // Add more work experience data here
];

const WorkExperience = () => {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    // Generate a random image URL from a list of image providers
    const imageProviders = [
      "https://source.unsplash.com/random/400x400", // Adjust the image size as needed
      // Add more image providers here if you want to fetch from different sources
    ];

    const randomIndex = Math.floor(Math.random() * imageProviders.length);
    setRandomImage(imageProviders[randomIndex]);
  };
  return (
    <section id="workExperience" className="work-experience-section">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="work-experience-container">
          {workExperienceData.map((item, index) => (
            <Fade key={index} bottom delay={index * 200}>
              <div className="work-card">
                <div className="work-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="work-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
