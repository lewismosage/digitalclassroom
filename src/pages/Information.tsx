import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Information = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Information Technolgy</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
      <Link to="/explore/information/security">
          <button className="category-btn-3">Security</button>
        </Link>
        <Link to="/explore/information/datamanagement">
          <button className="category-btn-1">Data Management</button>
        </Link>
        <Link to="/explore/information/networking">
          <button className="category-btn-5">Networking</button>
        </Link>
        <Link to="/explore/information/supportoperations">
          <button className="category-btn-6">Support and Operations</button>
        </Link>
        <Link to="/explore/information/cloudcomputing">
          <button className="category-btn-2">Cloud Computing</button>
        </Link>
      </div>

      <div className="explore-container">
      {/* Coming Soon Section */}
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">Courses Coming Out Soon</h2>
        <p className="coming-soon-text">Stay tuned for exciting new courses in Information Technology, and more!</p>
      </div>
    </div>
     
      

    </div>
  );
};

export default Information;
