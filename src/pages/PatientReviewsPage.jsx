import React, { useState, useEffect } from 'react';

const PatientReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');

  // Load from localStorage when component mounts
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('patientReviews')) || [];
    setReviews(storedReviews);
  }, []);

  // Save to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem('patientReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !reviewText) return;

    const newReview = {
      name,
      review: reviewText,
      date: new Date().toLocaleDateString()
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setReviewText('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Patient Reviews</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows={4}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit Review</button>
      </form>

      <div style={styles.reviewsList}>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((rev, index) => (
            <div key={index} style={styles.reviewCard}>
              <strong>{rev.name}</strong> <span style={styles.date}>({rev.date})</span>
              <p>{rev.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '650px',
    margin: '40px auto',
    padding: '20px',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#d5006d',
    marginBottom: '24px',
    fontSize: '28px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  input: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '10px 16px',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '500',
    border: '2px solid #4caf50',
    color: '#d5006d',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  reviewsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  reviewCard: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  date: {
    fontSize: '0.9rem',
    color: '#777',
    marginLeft: '8px',
  },
};

export default PatientReviewsPage;
