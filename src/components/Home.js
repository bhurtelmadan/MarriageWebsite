import React from 'react';

function Home() {
  return (
    <div className="wedding-details">
      <h2>We're Getting Married!</h2>
      <div className="couple-image">
        {/* PLACEHOLDER IMAGE: Replace with your actual image later */}
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="A and B" />
      </div>
      <div className="details-container">
        <div className="detail-item">
          <h3>Date</h3>
          <p>March 08</p>
        </div>
        <div className="detail-item">
          <h3>Venue</h3>
          <p>Parks Mall</p>
        </div>
        <div className="detail-item">
          <h3>Time</h3>
          <p>6:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Home; 