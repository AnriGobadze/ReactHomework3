import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="left-footer">
        <div className="profile-location">
          <div className="icon-container">
            <FaMapMarkerAlt />
          </div>
          <div className="profile-text">
            <p>21 Revolution Street,</p>
            <h3>Paris, France</h3>
          </div>
        </div>

        <div className="profile-number">
          <div className="icon-container">
            <FaPhoneAlt />
          </div>
          <h4>+995 555 123456</h4>
        </div>

        <div className="profile-gmail">
          <div className="icon-container">
            <FaEnvelope />
          </div>
          <h4>
            <a href="mailto:anrigobadze02@gmail.com" className="email-link">
              anrigobadze02@gmail.com
            </a>
          </h4>
        </div>
      </div>

      <div className="right-footer">
        <h2>About this company</h2>
        <p>Lorem ipsum dolor sit ametcas csectetur adipisicing elit. rgeuba Reiciendis pariatur quidem explicabo quos nulla veritatis assumenda dolor, sunt, voluptates nihil voluptatum repudiandae aspernatur officia. Tempore numquam accusantium, inventore, facilis rem, ea architecto deserunt cumque neque quis incidunt molestias error reiciendis.</p>
      </div>
    </footer>
  );
}
