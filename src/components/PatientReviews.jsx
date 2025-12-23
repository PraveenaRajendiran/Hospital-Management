import React from 'react';

const PatientReviewsPage = () => {
  return (
    <div className="patient-reviews-container">
      <h2 className="reviews-title">Patient Reviews</h2>
      <form className="reviews-form">
        <label htmlFor="patient-name">Name</label>
        <input
          type="text"
          id="patient-name"
          placeholder="Enter your name"
        />

        <label htmlFor="patient-review">Review</label>
        <textarea
          id="patient-review"
          placeholder="Share your review"
          rows="4"
        ></textarea>

        <label htmlFor="patient-rating">Rating</label>
        <select id="patient-rating">
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>

        <button type="submit">Submit Review</button>
      </form>

      <style>
        {`
          .patient-reviews-container {
            max-width: 450px;
            margin: 60px auto;
            padding: 20px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            background-color: #f9f9f9;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          }

          .reviews-title {
            text-align: center;
            color: #d5006d;
            margin-bottom: 24px;
            font-size: 28px;
          }

          .reviews-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .reviews-form input,
          .reviews-form select,
          .reviews-form textarea {
            padding: 10px 15px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
            transition: border-color 0.3s;
          }

          .reviews-form input:focus,
          .reviews-form select:focus,
          .reviews-form textarea:focus {
            border-color: #d5006d;
            outline: none;
          }

          .reviews-form button {
            padding: 10px 16px;
            border-radius: 25px;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            border: 2px solid #4caf50;
            color: #d5006d;
            background-color: transparent;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .reviews-form button:hover {
            background-color: #d5006d;
            border-color: #d5006d;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default PatientReviewsPage;
