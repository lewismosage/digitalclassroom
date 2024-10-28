import React from 'react';
import { Link } from 'react-router-dom';
import intellectualHumanity from '../images/intellectualHumanity.png'; 
import knowTyself from '../images/knowTyself.png';
import intellectualHumility from '../images/intellectualHumility.png';
import modernandthePostmodern from '../images/modernandthePostmodern.png';
import mindoftheUniverse from '../images/mindoftheUniverse.png';
import philosophyandtheScience from '../images/philosophyandtheScience.png';
import lutherandtheWest from '../images/lutherandtheWest.png';
import revolutionaryIdea from '../images/revolutionaryIdea.png';
import loveasForceforSocialJustice from '../images/loveasForceforSocialJustice.png';
import bachelorofArtsinLiberalStudies from '../images/bachelorofArtsinLiberalStudies.png';
import bachelorofAppliedArtsandScience from '../images/bachelorofAppliedArtsandScience.png';
import philosophyScienceandReligion from '../images/philosophyScienceandReligion.png'
import './Explore.css'; 

const Philosophy = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Philosophy</h2>
      
      {/* Finish a Philosophy in Course in Under 24 Hours */}
      <div className="popular-section">
        <h3>Finish a Philosophy in Course in Under 24 Hours</h3>
        <div className="course-cards">
        <Link to="/course/the-modern-and-the-postmodern-part-1" className="link">
          <div className="course-card">
            <img src={modernandthePostmodern} alt="TheModernandthePostmodern" />
            <div className="course-info">
              <h4>The Modern and the Postmodern (Part 1)</h4>  
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/intellectual-humility-science" className="link">
          <div className="course-card">
            <img src={intellectualHumility} alt="Intellectual Humility" />
            <div className="course-info">
              <h4>Intellectual Humility: Science</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/know-thyself-value-limits-self-knowledge" className="link">
          <div className="course-card">
            <img src={knowTyself} alt="Know Tyself" />
            <div className="course-info">
              <h4>Know Tyself - The Value and Limits of Self-Knowledge: The Examined Life</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/intellectual-humanity-practice" className="link">
          <div className="course-card">
            <img src={intellectualHumanity} alt="Intellectual Humanity" />
            <div className="course-info">
              <h4>Intellectual Humanity: Practice</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/mind-of-the-universe" className="link">
          <div className="course-card">
            <img src={mindoftheUniverse} alt="Mind of the Universe" />
            <div className="course-info">
              <h4>Mind of the Universe</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>

      {/* Earn Your Degree */}
      <div className="personalized-section">
        <h3>Earn Your Degree</h3>
        <div className="course-cards">
        <Link to="/course/ba-liberal-studies" className="link">
          <div className="course-card">
            <img src={bachelorofArtsinLiberalStudies} alt="Bachelor of Arts in Liberal Studies" />
            <div className="course-info">
              <strong>Bachelor of Arts in Liberal Studies</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>

          <Link to="/course/bachelor-applied-arts-science" className="link">
          <div className="course-card">
            <img src={bachelorofAppliedArtsandScience} alt="Bachelor of Applied Arts and Science" />
            <div className="course-info">
              <strong>Bachelor of Applied Arts and Science</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>
          {/* Add more degree cards as needed */}
        </div>
      </div>

      {/* More Philosopy Courses */}
      <div className="personalized-section">
        <h3>More Philosophy Courses</h3>
        <div className="course-cards">
        <Link to="/course/philosophy-science-religion" className="link">
          <div className="course-card">
            <img src={philosophyScienceandReligion} alt="Philosophy, Science and Religion" />
            <div className="course-info">
              <h4>Philosophy, Science and Religion:</h4>
              <p>Philosophy and Religion</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/philosophy-and-the-science" className="link">
          <div className="course-card">
            <img src={philosophyandtheScience} alt="PhilosophyandtheScience" />
            <div className="course-info">
              <h4>Philosophy and the Science:</h4>
              <p>Introduction to the Philosopy of Cognitive Science</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/luther-and-the-west" className="link">
          <div className="course-card">
            <img src={lutherandtheWest} alt="Luther and the West" />
            <div className="course-info">
              <h4>Luther and the West</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/revolutionary-idea" className="link">
          <div className="course-card">
            <img src={revolutionaryIdea} alt="Revolutionary Idea" />
            <div className="course-info">
              <h4>Revolutionary Idea:</h4>
              <p>Utilty, Justice, Equality, Freedom</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div> 
          </Link>

          <Link to="/course/love-as-force-for-social-justice" className="link">
          <div className="course-card">
            <img src={loveasForceforSocialJustice} alt="Love as a Force for Social Justice" />
            <div className="course-info">
              <h4>Love as a Force for Social Justice</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div> 
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>

    </div>
  );
};

export default Philosophy;
