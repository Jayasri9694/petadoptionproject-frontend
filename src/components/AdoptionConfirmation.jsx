import React from 'react';
import { Link } from 'react-router-dom';
import './AdoptionConfirmation.css';
const AdoptionConfirmation = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Adoption Request Submitted</h1>
      <p>Your adoption request has been submitted successfully!</p>
      <p>We will get back to you shortly.</p>
      <p>Thank you for choosing to adopt!</p>
      <Link to="/">
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white' }}>
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default AdoptionConfirmation;
