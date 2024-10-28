import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const PhysicalScienceandEngineering = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Physical Science and Engineering</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
      <Link to="/explore/physicalscience/chemistry">
          <button className="category-btn-2">Chemistry</button>
        </Link>
        <Link to="/explore/physicalscience/researchmethods">
          <button className="category-btn-1">Research Methods</button>
        </Link>
        <Link to="/explore/physicalscience/electricalengineering">
          <button className="category-btn-3">Electrical Engineering</button>
        </Link>
        <Link to="/explore/physicalscience/environmentalscience ">
          <button className="category-btn-5">Environmental Science and Sustainability</button>
        </Link>   
        <Link to="/explore/physicalscience/mechanicalengineering">
          <button className="category-btn-2">Mechanical Engineering</button>
        </Link>
        <Link to="/explore/physicalscience/physicsandastronomy">
          <button className="category-btn-6">Physics and Astronomy</button>
        </Link>
      </div>

      <div className="explore-container">
      {/* Coming Soon Section */}
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">Courses Coming Out Soon</h2>
        <p className="coming-soon-text">Stay tuned for exciting new courses in Physical Science and Engineering, and more!</p>
      </div>
    </div>

      

    </div>
  );
};

export default PhysicalScienceandEngineering;
