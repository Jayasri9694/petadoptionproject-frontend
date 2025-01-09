import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import './contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h4>Address</h4>
            <p>1234 Pet Adoption St., Animal City, Petland,dubai</p>
          </div>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <h4>Contact Number</h4>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div>
            <h4>Email</h4>
            <p>info@petadoption.com</p>
          </div>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <div>
            <h4>Instagram</h4>
            <p>
              <a href="https://www.instagram.com/petadoption/" target="_blank" rel="noopener noreferrer">
                @petadoption
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
