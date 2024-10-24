import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const computerscience = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Computer Science</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
      <Link to="/explore/computerscience/algorithms">
          <button className="category-btn-3">Algorithms</button>
        </Link>
        <Link to="/explore/computerscience/softwaredevelopment">
          <button className="category-btn-1">Software Development</button>
        </Link>
        <Link to="/explore/computerscience/mobileandwebdevelopment">
          <button className="category-btn-5">Mobile and Web Development</button>
        </Link>
        <Link to="/explore/computerscience/designandproducts">
          <button className="category-btn-2">Design and Products</button>
        </Link>   
        <Link to="/explore/computerscience/computersecurity">
          <button className="category-btn-6">Computer Security and Networks</button>
        </Link>
      </div>

      <div className="explore-container">
      {/* Coming Soon Section */}
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">Courses Coming Out Soon</h2>
        <p className="coming-soon-text">Stay tuned for exciting new courses in Computer Science, and more!</p>
      </div>
    </div>


    </div>
  );
};

export default computerscience;
