// Home.jsx
import React from 'react';
import "../components/Home.css"; // Correct import of CSS

const Home = () => {
  return (
    <div className="home-container-full">
      <div className="banner">
        <h1 className="title">Welcome to the Pet Adoption Platform!</h1>
        <p className="subtitle">Find your perfect pet today and make a difference in their life.</p>
      </div>
      <div className="features">
        <h2 className="feature-title">Why Adopt a Pet?</h2>
        <ul className="feature-list">
          <li>Give a pet a loving home</li>
          <li>Save lives and make a difference</li>
          <li>Enjoy the companionship of a pet</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
