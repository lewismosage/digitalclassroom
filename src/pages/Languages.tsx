import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const PersonalDevelopment = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Language Learning</h2>
      <div className="categories">
        <Link to="/explore/languagues/learningenglish">
          <button className="category-btn-3">Learning English</button>
        </Link>
        <Link to="/explore/languagues/0therlanguages">
          <button className="category-btn-5">Other Languages</button>
        </Link>   
      </div>
      
      <div className="explore-container">
      {/* Coming Soon Section */}
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">Courses Coming Out Soon</h2>
        <p className="coming-soon-text">Stay tuned for exciting new courses in Language Learning, and more!</p>
      </div>
    </div>

      

    </div>
  );
};

export default PersonalDevelopment;
