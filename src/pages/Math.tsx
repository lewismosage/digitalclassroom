import React from 'react';
import { Link } from 'react-router-dom';
import algorithms from '../images/algorithms.png'; 
import SingleVariblesPartFunctions from '../images/SingleVariblesPartFunctions.png';
import advancedStatisticsforDataScience from '../images/advancedStatisticsforDataScience.png';
import introductiontoComplexAnalysis from '../images/introductiontoComplexAnalysis.png';
import VectorsCalculusforEngineers from '../images/VectorsCalculusforEngineers.png';
import matrixAlgebraforEngineers from '../images/matrixAlgebraforEngineers.png';
import cloudComputingConceptsPart1 from '../images/cloudComputingConceptsPart1.png';
import cforEveryone from '../images/cforEveryone.png';
import javaProgramming from '../images/javaProgramming.png';
import foundationofDataStructuresandAlgorithms from '../images/foundationofDataStructuresandAlgorithms.png';
import mathematicsforMachineLearningandDataScience from '../images/mathematicsforMachineLearningandDataScience.png';
import bachelorofScienceinComputerScience from '../images/bachelorofScienceinComputerScience.png';
import internationalFoundationforComputerScience from '../images/internationalFoundationforComputerScience.png';
import mScDataScience from '../images/bachelorofAppliedArtsandScience.png';
import dynamicProgrammingGreedyAlgorithms from '../images/dynamicProgrammingGreedyAlgorithms.png';
import introductiontoAppliedCryptography from '../images/introductiontoAppliedCryptography.png';
import foundationData from '../images/foundationData.png';
import probabilityTheory from '../images/probabilityTheory.png';
import computationThinking from '../images/computationThinking.png';
import introductiontoLogic from '../images/photographyBasics.png';
import './Explore.css'; 

const Math = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Math and Logic</h2>
      {/* Algorithms to Take Your Programming to The Next Level */}
      <div className="popular-section">
        <h3>Algorithms to Take Your Programming to The Next Level</h3>
        <div className="course-cards">
        <Link to="/course/algorithms-to-take-your-programming-to-next-level" className="link">
          <div className="course-card">
            <img src={algorithms} alt="Algorithms" />
            <div className="course-info">
              <h4>Algorithms</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/mathematics-for-machine-learning-data-science" className="link">
          <div className="course-card">
            <img src={mathematicsforMachineLearningandDataScience} alt="Mathematics for Machine Learning and Data Science" />
            <div className="course-info">
              <h4>Mathematics for Machine Learning and Data Science</h4>
              <p>Deep Learning.AI</p>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/foundations-of-data-structures-algorithms" className="link">
          <div className="course-card">
            <img src={foundationofDataStructuresandAlgorithms} alt="Foundation of Data Structures and Algorithms" />
            <div className="course-info">
              <h4>Foundation of Data Structures and Algorithms</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/java-programming-software-engineering-fundamentals" className="link">
          <div className="course-card">
            <img src={javaProgramming} alt="Java Programming" />
            <div className="course-info">
              <h4>Java Programming and Software Engineering Fundamentals</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/c-for-everyone-structured-programming" className="link">
          <div className="course-card">
            <img src={cforEveryone} alt="C for Everyone" />
            <div className="course-info">
              <h4>C for Everyone: Structured Programming</h4>
              <p>From Smartphones to DSLR</p>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/cloud-computing-concepts-part-1" className="link">
          <div className="course-card">
            <img src={cloudComputingConceptsPart1} alt="Cloud Computing Concepts, Part 1" />
            <div className="course-info">
              <h4>Cloud Computing Concepts, Part 1</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>

      {/* Finish a Math and Logic Course in Under 24 Hours */}
      <div className="personalized-section">
        <h3>Finish a Math and Logic Course in Under 24 Hours</h3>
        <div className="course-cards">
        <Link to="/course/matrix-algebra-for-engineers" className="link">
          <div className="course-card">
            <img src={matrixAlgebraforEngineers} alt="Matrix Algebra for Engineers" />
            <div className="course-info">
              <h4>Matrix Algebra for Engineers</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/vectors-calculus-for-engineers" className="link">
          <div className="course-card">
            <img src={VectorsCalculusforEngineers} alt="Vectors Calculus for Engineers" />
            <div className="course-info">
              <h4>Vectors Calculus for Engineers</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/single-variables-part-1-functions" className="link">
          <div className="course-card">
            <img src={SingleVariblesPartFunctions} alt="Single Varibles Part 1-Functions" />
            <div className="course-info">
              <h4>Calculus:</h4>
              <p>Single Variables Part 1-Functions</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/advanced-statistics-for-data-science" className="link">
          <div className="course-card">
            <img src={advancedStatisticsforDataScience} alt="Advanced Statistics for Data Science" />
            <div className="course-info">
              <h4>Advanced Statistics for Data Science</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>
          

          <Link to="/course/introduction-to-complex-analysis" className="link">
          <div className="course-card">
            <img src={introductiontoComplexAnalysis} alt="Introduction to Complex Analysis" />
            <div className="course-info">
              <h4>Introduction to Complex Analysis</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
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
        <Link to="/course/bachelor-of-science-computer-science" className="link">
          <div className="course-card">
            <img src={bachelorofScienceinComputerScience} alt="Bachelor of Science in Computer Science" />
            <div className="course-info">
              <strong>Bachelor of Science in Computer Science</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>

          <Link to="/course/international-foundation-program-computer-science" className="link">
          <div className="course-card">
            <img src={internationalFoundationforComputerScience} alt="International Foundation Programme for Computer Science" />
            <div className="course-info">
              <strong>International Foundation Program for Computer Science</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>

          <Link to="/course/msc-data-science-statistics" className="link">
          <div className="course-card">
            <img src={mScDataScience} alt="MSc Data Science" />
            <div className="course-info">
              <strong>MSc Data Science (Statistics)</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>
        </div>
        

      </div>

      {/* More Algorithms to Take Your Programming to the Next Level */}
      <div className="personalized-section">
      <h3>More Algorithms to Take Your Programming to the Next Level</h3>
      <div className="popular-section">
        <div className="course-cards">
        <Link to="/course/dynamic-programming-greedy-algorithms" className="link">
          <div className="course-card">
            <img src={dynamicProgrammingGreedyAlgorithms} alt="Dynamic Programming, Greedy Algorithms" />
            <div className="course-info">
              <h4>Dynamic Programming, Greedy Algorithms</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/more-algorithms-to-take-your-programming-next-level" className="link">
          <div className="course-card">
            <img src={introductiontoAppliedCryptography} alt="Introduction to Applied Cryptography" />
            <div className="course-info">
              <h4>Introduction to Applied Cryptography</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/introduction-to-applied-cryptography" className="link">
          <div className="course-card">
            <img src={foundationData} alt="Foundation of Data Structures and Algorithms" />
            <div className="course-info">
              <h4>Foundation of Data Structures and Algorithms</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/foundation-for-data-science" className="link">
          <div className="course-card">
            <img src={probabilityTheory} alt="Probability Theory" />
            <div className="course-info">
              <h4>Probability Theory:</h4>
              <p>Foundation For Data Science</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/computation-thinking-for-problem-solving" className="link">
          <div className="course-card">
            <img src={computationThinking} alt="Computation Thinking for Problem Solving" />
            <div className="course-info">
              <h4>Computation Thinking for Problem Solving</h4>
              <p>From Smartphones to DSLR</p>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/introduction-to-logic" className="link">
          <div className="course-card">
            <img src={introductiontoLogic} alt="Introduction to Logic" />
            <div className="course-info">
              <h4>Introduction to Logic</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>
   
      </div>


    </div>
  );
};
    

export default Math;
















