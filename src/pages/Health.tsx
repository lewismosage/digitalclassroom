import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Health = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Health</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
      <Link to="/explore/health/research">
          <button className="category-btn-2">Research</button>
        </Link>
        <Link to="/explore/health/healthinformatics">
          <button className="category-btn-1">Health Informatics</button>
        </Link>
        <Link to="/explore/health/basicscience">
          <button className="category-btn-3">Basic Science</button>
        </Link>
        <Link to="/explore/health/publichealth">
          <button className="category-btn-5">Public Health</button>
        </Link>   
        <Link to="/explore/health/animalhealth">
          <button className="category-btn-2">Animal Health</button>
        </Link>
        <Link to="/explore/health/healthcaremanagement">
          <button className="category-btn-6">Healthcare Management</button>
        </Link>
        <Link to="/explore/health/patientcare">
          <button className="category-btn-3">Patient Care</button>
        </Link>
        <Link to="/explore/health/nutrition">
          <button className="category-btn-1">Nutrition</button>
        </Link>
      </div>

      <div className="explore-container">
      {/* Coming Soon Section */}
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">Courses Coming Out Soon</h2>
        <p className="coming-soon-text">Stay tuned for exciting new courses in Health, and more!</p>
      </div>
    </div>

      

    </div>
  );
};

export default Health;
