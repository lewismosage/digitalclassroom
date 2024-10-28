import { Link } from 'react-router-dom';
import './Explore.css';

const SocialSciences = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Social Sciences</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
      <Link to="/explore/socialsciences/economics">
          <button className="category-btn-2">Economics</button>
        </Link>
        <Link to="/explore/socialsciences/education">
          <button className="category-btn-1">Education</button>
        </Link>
        <Link to="/explore/socialsciences/governmentandsociety">
          <button className="category-btn-3">Government and Society</button>
        </Link>
        <Link to="/explore/socialsciences/law">
          <button className="category-btn-5">Law</button>
        </Link>   
      </div>

      <div className="explore-container">
      {/* Coming Soon Section */}
      <div className="coming-soon-container">
        <h2 className="coming-soon-title">Courses Coming Out Soon</h2>
        <p className="coming-soon-text">Stay tuned for exciting new courses in Social Sciences, and more!</p>
      </div>
    </div>

      

    </div>
  );
};

export default SocialSciences;
