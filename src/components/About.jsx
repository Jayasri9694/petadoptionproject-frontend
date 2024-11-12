// src/components/About.jsx
import React from 'react';
import './About.css'; // Optional: import a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the Pet Adoption Platform, where we connect loving homes with
        pets in need of a forever family. Our mission is to facilitate the
        adoption of pets and to promote the responsible ownership of animals.
      </p>
      <h2>Our Mission</h2>
      <p>
        We believe that every pet deserves a loving home. Our platform provides
        an easy and efficient way for pet owners to list their pets for adoption
        and for potential adopters to find their perfect companion.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li>Easy pet listings with detailed information</li>
        <li>Search and filter options to find the right pet</li>
        <li>Application process for interested adopters</li>
        <li>Support and resources for pet care</li>
      </ul>
      <h2>Join Us</h2>
      <p>
        Whether you're looking to adopt a pet or give up a pet for adoption,
        we're here to help. Together, we can make a difference in the lives of
        pets and their future families.
      </p>
    </div>
  );
};

export default About;
