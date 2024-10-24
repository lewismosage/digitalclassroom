import React from 'react';
import { Link } from 'react-router-dom';
import FeminismandSocialJustice from '../images/FeminismandSocialJustice.png'; 
import FilmImagesHistoricalInterpretation from '../images/FilmImagesHistoricalInterpretation.png';
import TheModernWorld from '../images/intellectualHumility.png';
import RussianHistory from '../images/RussianHistory.png';
import TheBiblePrehistory from '../images/TheBiblePrehistory.png';
import EmergenceoftheMordernMiddleEast from '../images/EmergenceoftheMordernMiddleEast.png';
import TheFallandRiseofJerusalem from '../images/TheFallandRiseofJerusalem.png';
import TheHistoryofModernIsrael from '../images/TheHistoryofModernIsrael.png';
import TheConsmopolitanMedievalArabicWorld from '../images/TheConsmopolitanMedievalArabicWorld.png';
import TheAncientGreeks from '../images/TheAncientGreeks.png';
import IntroductiontoAncientEgypt from '../images/IntroductiontoAncientEgypt.png';
import ArchaeologyandHistoryofthePalatineHill from '../images/ArchaeologyandHistoryofthePalatineHill.png';
import WondersofAncientEgypt from '../images/WondersofAncientEgypt.png';
import GreekandRomanMythology from '../images/GreekandRomanMythology.png';
import bachelorofArtsinLiberalStudies from '../images/bachelorofArtsinLiberalStudies.png';
import bachelorofAppliedArtsandScience from '../images/bachelorofAppliedArtsandScience.png';
import RomanArtandArchaeology from '../images/RomanArtandArchaeology.png'
import './Explore.css'; 

const History = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">History</h2>
      
      {/* History in the Middle East */}
      <div className="popular-section">
        <h3>History in the Middle East</h3>
        <div className="course-cards">
        <Link to="/course/modern-middle-east-part-1" className="link">
          <div className="course-card">
            <img src={EmergenceoftheMordernMiddleEast} alt="The Emergence of the Mordern Middle East" />
            <div className="course-info">
              <h4>The Emergence of the Modern Middle East (Part 1)</h4>  
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/cosmopolitan-medieval-arabic-world" className="link">
          <div className="course-card">
            <img src={TheConsmopolitanMedievalArabicWorld} alt="The Consmopolitan Medieval Arabic World" />
            <div className="course-info">
              <h4>The Cosmopolitan Medieval Arabic World</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/fall-rise-jerusalem" className="link">
          <div className="course-card">
            <img src={TheFallandRiseofJerusalem} alt="The Fall and Rise of Jerusalem" />
            <div className="course-info">
              <h4>The Fall and Rise of Jerusalem</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/history-modern-israel-part-1" className="link">
          <div className="course-card">
            <img src={TheHistoryofModernIsrael} alt="The History of Modern Israel" />
            <div className="course-info">
              <h4>The History of Modern Israel - Part I:</h4>
              <p>From an Idea to a State</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/bibles-prehistory-purpose-political-future" className="link">
          <div className="course-card">
            <img src={TheBiblePrehistory} alt="The Bible's Prehistory" />
            <div className="course-info">
              <h4>The Bible's Prehistory, Purpose, and Political Future</h4>
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

      {/* Contemporary History*/}
      <div className="personalized-section">
        <h3>Contemporary History</h3>
        <div className="course-cards">
        <Link to="/course/feminism-social-justice'" className="link">
          <div className="course-card">
            <img src={FeminismandSocialJustice} alt="Feminism and Social Justice" />
            <div className="course-info">
              <h4>Feminism and Social Justice</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/film-images" className="link">
          <div className="course-card">
            <img src={FilmImagesHistoricalInterpretation} alt="Film, Images & Historical Interpretation" />
            <div className="course-info">
              <h4>Film, Images & Historical Interpretation in the 20th Century:</h4>
              <p>The Camera Never Lies</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/modern-world-part-2" className="link">
          <div className="course-card">
            <img src={TheModernWorld} alt="The Modern World, Part Two" />
            <div className="course-info">
              <h4>The Modern World, Part Two:</h4>
              <p>Global History since 1910</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/russian-history" className="link">
          <div className="course-card">
            <img src={RussianHistory} alt="Russian History" />
            <div className="course-info">
              <h4>Russian History:</h4>
              <p>From Lenin to Putin</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/ancient-greeks" className="link">
          <div className="course-card">
            <img src={TheAncientGreeks} alt="The Ancient Greeks" />
            <div className="course-info">
              <h4>The Ancient Greeks</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div> 
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>

      {/* Ancient History Brought to Life*/}
      <div className="personalized-section">
        <h3>Ancient History Brought to Life</h3>
        <div className="course-cards">
        <Link to="/course/introduction-ancient-egypt-civilization" className="link">
          <div className="course-card">
            <img src={IntroductiontoAncientEgypt} alt="Introduction to Ancient Egypt and its Civilization" />
            <div className="course-info">
              <h4>Introduction to Ancient Egypt and its Civilization</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/wonders-ancient-egypt" className="link">
          <div className="course-card">
            <img src={WondersofAncientEgypt} alt="Wonders of Ancient Egypt" />
            <div className="course-info">
              <h4>Wonders of Ancient Egypt</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/changing-landscape-ancient-rome" className="link">
          <div className="course-card">
            <img src={ArchaeologyandHistoryofthePalatineHill} alt="Archaeology and History of the Palatine Hill" />
            <div className="course-info">
              <h4>The Changing Landscape of Ancient Rome</h4>
              <p>Archaeology and History of the Palatine Hill</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div> 
          </Link>

          <Link to="/course/greek-roman-mythology" className="link">
          <div className="course-card">
            <img src={GreekandRomanMythology} alt="Greek and Roman Mythology" />
            <div className="course-info">
              <h4>Greek and Roman Mythology</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/roman-art-archaeology" className="link">
          <div className="course-card">
            <img src={RomanArtandArchaeology} alt="Roman Art and Archaeology" />
            <div className="course-info">
              <h4>Roman Art and Archaeology</h4>
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

export default History;
