import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const datascience = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Data Science</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
      <Link to="/explore/datascience/dataanalysis">
          <button className="category-btn-3">Data Analysis</button>
        </Link>
        <Link to="/explore/datascience/machinelearning">
          <button className="category-btn-1">Machine Learning</button>
        </Link>
        <Link to="/explore/datascience/probabilityandstatistics">
          <button className="category-btn-5">Probability and Statistics</button>
        </Link>
        
      </div> 

      <div className="explore-container">
      {/* Coming Soon Section */}
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">Courses Coming Out Soon</h2>
        <p className="coming-soon-text">Stay tuned for exciting new courses in Data Science, and more!</p>
      </div>
    </div>
     
      

    </div>
  );
};

export default datascience;
