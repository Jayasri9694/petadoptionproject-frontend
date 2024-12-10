// import React from "react";
import "../components/About.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container-full">
      <div className="banner">
        <h1 className="title">About Us - Pet Adoption Platform</h1>
        <p className="subtitle">
          Our mission is to connect loving homes with pets in need of a forever family.
        </p>
      </div>
      <div className="features">
        <h2 className="feature-title">Why Choose Us?</h2>
        <ul className="feature-list">
          <li>Facilitating responsible pet adoption</li>
          <li>Providing detailed pet profiles for informed decisions</li>
          <li>Promoting a loving and caring environment for pets</li>
        </ul>
      </div>
      <div className="mission">
        <h2 className="mission-title">Our Mission</h2>
        <p>
          We believe every pet deserves a loving home. Our platform provides an easy way for pet owners to list their pets for adoption, and for potential adopters to find their perfect companion.
        </p>
      </div>
    </div>
  );
};

export default About;
