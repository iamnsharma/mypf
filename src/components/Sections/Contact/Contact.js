import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              Have a project in mind or want to collaborate? Feel free to
              contact me. I'm always open to new opportunities and challenges in
              the tech industry.
            </p>
            {/* Add any other contact information or social media links here */}
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <h3>Get in Touch</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required />
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
