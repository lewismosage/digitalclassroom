import React from 'react';
import { Link } from 'react-router-dom';
import CreativeWriting from '../images/CreativeWriting.png'; 
import Songwriting from '../images/Songwriting.png'; 
import GettingStartedWithMusicTheory from '../images/CreativeWriting.png'; 
import FundamentalsofMusicTheory from '../images/FundamentalsofMusicTheory.png'; 
import DevelopingYourMusicianship from '../images/DevelopingYourMusicianship.png'; 
import MusicProduction from '../images/MusicProduction.png'; 

import TransmediaStorytelling from '../images/TransmediaStorytelling.png';
import ModernContemporaryAfricanPoetry from '../images/ModernContemporaryAfricanPoetry.jpg';
import ModernAmericanPoetry from '../images/ModernAmericanPoetry.png';
import SeeingThroughPhotographs from '../images/SeeingThroughPhotographs.png';
import IntroducingtoImagemaking from '../images/IntroducingtoImagemaking.png';
import PhotographBasicsandBeyond from '../images/PhotographBasicsandBeyond.png';
import InteractionDesign from '../images/InteractionDesign.jpg';
import bachelorofArtsinLiberalStudies from '../images/bachelorofArtsinLiberalStudies.png';
import bachelorofAppliedArtsandScience from '../images/bachelorofAppliedArtsandScience.png';
import IntroductiontoUIDesign from '../images/IntroductiontoUIDesign.png'
import './Explore.css'; 

const MusicandArts = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Music and Art</h2>
      
      {/* Make Music */}
      <div className="popular-section">
        <h3>Make Music</h3>
        <div className="course-cards">
        <Link to="/course/songwriting-writing-the-lyrics" className="link">
          <div className="course-card">
            <img src={Songwriting} alt="Songwriting" />
            <div className="course-info">
              <h4>Songwriting: Writing the Lyrics</h4>  
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/getting-started-with-music-theory" className="link">
          <div className="course-card">
            <img src={GettingStartedWithMusicTheory} alt="Getting Started With Music Theory" />
            <div className="course-info">
              <h4>Getting Started With Music Theory</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/fundamentals-of-music-theory" className="link">
          <div className="course-card">
            <img src={FundamentalsofMusicTheory} alt="Fundamentals of Music Theory" />
            <div className="course-info">
              <h4>Fundamentals of Music Theory</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/developing-your-musicianship" className="link">
          <div className="course-card">
            <img src={DevelopingYourMusicianship} alt="Developing Your Musicianship" />
            <div className="course-info">
              <h4>Developing Your Musicianship</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/music-production" className="link">
          <div className="course-card">
            <img src={MusicProduction} alt="Music Production" />
            <div className="course-info">
              <h4>Music Production</h4>
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

      {/*Creative Writing*/}
      <div className="personalized-section">
        <h3>Creative Writing</h3>
        <div className="course-cards">
        <Link to="/course/creative-writing" className="link">
          <div className="course-card">
            <img src={CreativeWriting} alt="Creative Writing" />
            <div className="course-info">
              <h4>Creative Writing</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/transmedia-storytelling" className="link">
          <div className="course-card">
            <img src={TransmediaStorytelling} alt="Transmedia Storytelling" />
            <div className="course-info">
              <h4>Transmedia Storytelling:</h4>
              <p>Narrative worlds, emerging technologies, and global audiences</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/modern-contemporary-african-poetry" className="link">
          <div className="course-card">
            <img src={ModernContemporaryAfricanPoetry} alt=">Modern & Contemporary African Poetry" />
            <div className="course-info">
              <h4>Modern & Contemporary African Poetry</h4>
              <p>Utilty, Justice, Equality, Freedom</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div> 
          </Link>

          <Link to="/course/modern-american-poetry" className="link">
          <div className="course-card">
            <img src={ModernAmericanPoetry} alt="Modern American Poetry" />
            <div className="course-info">
              <h4>Modern American Poetry</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div> 
          </Link>
          {/* Add more course cards as needed */}
        </div>

      {/*Get Started With Photography */}
        <div className="popular-section">
          <h3>Get Started With Photography</h3>
          <div className="course-cards">
          <Link to="/course/seeing-through-photographs" className="link">
            <div className="course-card">
              <img src={SeeingThroughPhotographs} alt="Seeing Through Photographs" />
              <div className="course-info">
                <h4>Seeing Through Photographs</h4>  
                <p>University of Nairobi</p>
                <p>Course</p>
                <p>⭐ 4.7k</p>
              </div>
            </div>
            </Link>

            <Link to="/course/introducing-to-imagemaking" className="link">
            <div className="course-card">
              <img src={IntroducingtoImagemaking} alt="Introducing to Imagemaking" />
              <div className="course-info">
                <h4>Introducing to Imagemaking</h4>
                <p>University of Nairobi</p>
                <p>Course</p>
                <p>⭐ 4.7k</p>
              </div>
            </div>
            </Link>

            <Link to="/course/photograph-basics-and-beyond" className="link">
            <div className="course-card">
              <img src={PhotographBasicsandBeyond} alt="Photograph Basics and Beyond" />
              <div className="course-info">
                <h4>Photograph Basics and Beyond:</h4>
                <p>From Smartphone to DSLR Specialization</p>
                <p>University of Nairobi</p>
                <p>Course</p>
                <p>⭐ 4.7k</p>
              </div>
            </div>
            </Link>

            <Link to="/course/interaction-design" className="link">
            <div className="course-card">
              <img src={InteractionDesign} alt="Interaction Design" />
              <div className="course-info">
                <h4>Interaction Design</h4>
                <p>University of Nairobi</p>
                <p>Specialization</p>
                <p>⭐ 4.7k</p>
              </div>
            </div>
            </Link>
            
            <Link to="/course/ui-design" className="link">
            <div className="course-card">
              <img src={IntroductiontoUIDesign} alt="Introduction to UI Design" />
              <div className="course-info">
                <h4>Introduction to UI Design</h4>
                <p>University of Nairobi</p>
                <p>Specialization</p>
                <p>⭐ 4.7k</p>
              </div>
            </div>
            </Link>
            {/* more course cards as needed */}
          </div>
          </div>

          </div>
    </div>
  );
};

export default MusicandArts;
