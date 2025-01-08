import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feedback.trim()) {
      setErrorMessage('Feedback cannot be empty');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/feedback', {
        feedback,
        rating,
      });

      if (response.status === 201) {
        setSuccessMessage('Thank you for your feedback!');
        setFeedback('');
        setRating(0);
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'An error occurred. Please try again.'
      );
    }
  };

  return (
    <div className="feedback-container">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            className="form-control"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating (Optional)</label>
          <select
            id="rating"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value="0">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
