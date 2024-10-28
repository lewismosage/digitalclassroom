import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Learn.css';

const Learn: React.FC = () => {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    navigate('/explore'); 
  };

  return (
    <div className="learn-container">
      {/* Icon placeholder */}
      <div className="icon-placeholder">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1484/1484843.png" 
          alt="Book icon"
          className="book-icon"
        />
      </div>

      {/* Main content */}
      <h2>Enroll in a course to view your progress</h2>
      <p>Start by enrolling in a course and learn something new.</p>

      {/* Explore courses button */}
      <button className="explore-button" onClick={handleExploreClick}>
        Explore courses
      </button>
    </div>
  );
};

export default Learn;
