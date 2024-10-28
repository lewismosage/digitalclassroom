import React from 'react';
import { Link } from 'react-router-dom';
import modernArtlogo from '../images/modernArtlogo.png'; 
import masterofArtsinEducationEducationalTechnology from '../images/masterofArtsinEducationEducationalTechnology.png';
import scriptWriting from '../images/scriptWriting.png';
import artifacts from '../images/artifacts.png';
import photographyBasics from '../images/photographyBasics.png';
import sharpenedVisions from '../images/sharpenedVisions.png';
import cameraNeverLies from '../images/cameraNeverLies.png';
import modernArtsIdeas from '../images/modernArtsIdeas.png';
import fashionasDesign from '../images/fashionasDesign.png';
import intheStudio from '../images/intheStudio.png';
import bachelorofArtsinLiberalStudies from '../images/bachelorofArtsinLiberalStudies.png';
import bachelorofAppliedArtsandScience from '../images/bachelorofAppliedArtsandScience.png';
import './Explore.css';

const Arts = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Arts and Humanities</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
      <Link to="/explore/arts/history">
          <button className="category-btn-1">History</button>
        </Link>
        <Link to="/explore/arts/musicandarts">
          <button className="category-btn-2">Music and Art</button>
        </Link>
        <Link to="/explore/arts/philosophy">
          <button className="category-btn-3">Philosophy</button>
        </Link>  
      </div>  
     
      {/* Unleash Your Inner Artist */}
      <div className="popular-section">
        <h3>Unleash Your Inner Artist</h3>
        <div className="course-cards">
        <Link to="/course/script-writing" className="link">
          <div className="course-card">
          <img src={scriptWriting} alt="Script Writing" />
            <div className="course-info">
              <h4>Script Writing:</h4>
              <p>Write a Pilot Episode for a TV or Web Series</p>
              <p></p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/design" className="link">
          <div className="course-card">
            <img src={artifacts} alt="Creation of Artifacts in Society" />
            <div className="course-info">
              <h4>Design:</h4>
              <p>Creation of Artifacts in Society</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/photography-basics-beyond" className="link">
          <div className="course-card">
            <img src={photographyBasics} alt="Photography Basics and Beyond" />
            <div className="course-info">
              <h4>Photography Basics and Beyond: </h4>
              <p>From Smartphones to DSLR</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/sharpened-visions" className="link">
          <div className="course-card">
            <img src={sharpenedVisions} alt="Sharpened Visions" />
            <div className="course-info">
              <h4>Sharpened Visions:</h4>
              <p>A Poetry Workshop</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/film-images-historical-interpretation-20th-century" className="link">
          <div className="course-card">
          <img src={cameraNeverLies} alt="The Camera Never Lies" />
            <div className="course-info">
              <h4>Film, Images & Historical Interpretation in the 20th Century:</h4>
              <p>The Camera Never Lies</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>
      

      {/* Virtual Musueum Tour */}
      <div className="personalized-section">
        <h3>Virtual Museum Tour</h3>
        <div className="course-cards">
        <Link to="/course/modern-contemporary-art-design" className="link">
        <div className="course-card">
            <img src={modernArtlogo} alt="Modern and Contemporary Art and Design" />
            <div className="course-info">
              <h4>Modern and Contemporary Art and Design</h4>
              <p>The Museum of Modern Art Specilization</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/modern-arts-ideas" className="link">
          <div className="course-card">
            <img src={modernArtsIdeas} alt=">Modern Arts & Ideas" />
            <div className="course-info">
              <h4>Modern Arts & Ideas</h4>
              <p>The Museum of Modern Art</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/fashion-as-design" className="link">
          <div className="course-card">
          <img src={fashionasDesign} alt="Fashion as Design" />
            <div className="course-info">
              <h4>Fashion as Design</h4>
              <p>The Museum of Modern Art</p>
              <p>Course</p>
              <p>⭐ 4.8 (193k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/in-the-studio-abstract-painting" className="link">
          <div className="course-card">
          <img src={intheStudio} alt=">In the Studio: Abstract Painting" />
            <div className="course-info">
              <h4>In the Studio: Abstract Painting</h4>
              <p>The Museum of Modern Art</p>
              <p>Course</p>
              <p>⭐ 4.8 (193k)</p>
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

          <Link to="/course/ma-education-educational-technology" className="link">
          <div className="course-card">
            <img src={masterofArtsinEducationEducationalTechnology} alt="Master of Arts in Education - Educational Technology" />
            <div className="course-info">
            <strong>Master of Arts in Education - Educational Technology</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>

    </div>
  );
};

export default Arts;
