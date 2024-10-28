import { Link } from 'react-router-dom';
import fullStackDevImage from '../images/fullStackDevImage.png';
import aIEngineering from '../images/aIEngineering.png';
import googleCybersecurity from '../images/googleCybersecurity.png';
import googleDataAnalytics from '../images/googleDataAnalytics.png';
import dataScience from '../images/dataScience.png';
import fullStackDevelopment from '../images/fullStackDevelopment.png';
import testBehaviorDrivenDevelopment from '../images/testBehaviorDrivenDevelopmen.png';
import generativeAIforSoftwareDevelopment from '../images/generativeAIforSoftwareDevelopment.jpg';
import businessIntelligence from '../images/businessIntelligence.png';
import deepLearning from '../images/deepLearning.jpg';
import programmingLanguages from '../images/programmingLanguages.png';
import advancedAlgorithms from '../images/advancedAlgorithms.png';
import python from '../images/python.png';
import programmingLanguagesPartC from '../images/programmingLanguagesPartC.png';
import algorithmsPartII from '../images/algorithmsPartII.png';
import './Explore.css'; 

const Explore = () => {
  

  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore Topics</h2>
      {/* Topic Categories as Buttons */}
      <div className="categories">
        <Link to="/explore/arts">
          <button className="category-btn-1">Arts and Humanities</button>
        </Link>
        <Link to="/explore/business">
          <button className="category-btn-2">Business</button>
        </Link>
        <Link to="/explore/computer-science">
          <button className="category-btn-3">Computer Science</button>
        </Link>
        <Link to="/explore/health">
          <button className="category-btn-4">Health</button>
        </Link>
        <Link to="/explore/it">
          <button className="category-btn-5">Information Technology</button>
        </Link>
        <Link to="/explore/maths">
          <button className="category-btn-6">Math and Logic</button>
        </Link>
        <Link to="/explore/data-science">
          <button className="category-btn-7">Data Science</button>
        </Link>
        <Link to="/explore/see-all">
          <button className="category-btn">See All...</button>
        </Link>
      </div>
     
      {/* Popular Certificates */}
      <div className="popular-section">
        <h3>My Digital Classroom</h3>
        <h4>Most Popular Certificates</h4>
        <div className="course-cards">
        <Link to="/course/full-stack-dev" className="link">
          <div className="course-card">
          <img src={fullStackDevImage} alt="IBM Full Stack Developer" />
            <div className="course-info">
              <h4>IBM Full Stack Developer</h4>
              <p>IBM Professional Certificate</p>
              <p>⭐ 4.5 (6.6k)</p>
            </div>
          </div>
        </Link>
         
        <Link to="/course/ai-engineering" className="link">
          <div className="course-card">
            <img src={aIEngineering} alt="IBM AI Engineering" />
            <div className="course-info">
              <h4>IBM AI Engineering</h4>
              <p>IBM Professional Certificate</p>
              <p>⭐ 4.5 (6.4k)</p>
            </div>
          </div>
        </Link>

          <Link to="/course/google-cybersecurity" className="link">
          <div className="course-card">
            <img src={googleCybersecurity} alt="Google Cybersecurity" />
            <div className="course-info">
              <h4>Google Cybersecurity</h4>
              <p>Google Professional Certificate</p>
              <p>⭐ 4.5 (30k)</p>
            </div>
          </div>
          </Link>

          <Link to= "/course/google-data-analytics" className='link'>
          <div className="course-card">
            <img src={googleDataAnalytics} alt="Google Data Analytics" />
            <div className="course-info">
              <h4>Google Data Analytics</h4>
              <p>Google Professional Certificate</p>
              <p>⭐ 4.8 (144k)</p>
            </div>
          </div>
          </Link>

          <Link to= "/course/data-science" className='link'>
          <div className="course-card">
          <img src={dataScience} alt="IBM Data Science" />
            <div className="course-info">
              <h4>IBM Data Science</h4>
              <p>IBM Professional Certificate</p>
              <p>⭐ 4.6 (73k)</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
          
        </div>
      </div>

      {/* Personalized Courses */}
      <div className="personalized-section">
      <Link to="/personalized-courses" className="link"><h3>Personalized Courses for You</h3></Link>
        <div className="course-cards">
        <Link to="/course/test-behavior-development" className="link">
        <div className="course-card">
            <img src={testBehaviorDrivenDevelopment} alt="Test and Behavior Driven Development" />
            <div className="course-info">
              <h4>Test and Behavior Driven Development</h4>
              <p>IBM Course</p>
              <p>⭐ 4.8 (193k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/full-stack-dev" className="link">
          <div className="course-card">
            <img src={fullStackDevelopment} alt="Full Stack Development" />
            <div className="course-info">
              <h4>Full Stack Application Development</h4>
              <p>IBM Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/generative-ai-software-dev" className="link">
          <div className="course-card">
          <img src={generativeAIforSoftwareDevelopment} alt="Generative AI for Software Development" />
            <div className="course-info">
              <h4>Generative AI for Software Development</h4>
              <p>IBM Course</p>
              <p>⭐ 4.8 (193k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/ibm-business-intelligence" className="link">
          <div className="course-card">
          <img src={businessIntelligence} alt="IBM Business intelligence" />
            <div className="course-info">
              <h4>IBM Business intelligence</h4>
              <p>IBM Course</p>
              <p>⭐ 4.8 (193k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/machine-learning" className="link">
          <div className="course-card">
          <img src={deepLearning} alt="Deep Learning. AI Specialization" />
            <div className="course-info">
              <h4>Machine Learning</h4>
              <p>Deep Learning. AI Specialization</p>
              <p>⭐ 4.9 (25k)</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>
      



      {/* Top Rated Courses */}
      <div className="personalized-section">
        <h3>Top Rated Courses</h3>
        <div className="course-cards">
        <Link to="/course/programming-languages-part-b" className="link">
        <div className="course-card">
            <img src={programmingLanguages} alt="Programming Languages, Part B" />
            <div className="course-info">
            <strong>Programming Languages, Part B</strong>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/advanced-learning-algorithms" className="link">
          <div className="course-card">
            <img src={advancedAlgorithms} alt="Advanced Learning, Algorithms" />
            <div className="course-info">
            <strong>Advanced Learning, Algorithms</strong>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/python-programming" className="link">
          <div className="course-card">
          <img src={python} alt="Python For Data Science, AI & Development" />
            <div className="course-info">
            <strong>Python For Data Science, AI & Development</strong>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/algorithms-part-ii" className="link">
          <div className="course-card">
          <img src={algorithmsPartII} alt="Algorithms, Part II" />
            <div className="course-info">
            <strong>Algorithms, Part II</strong>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/programming-languages-part-c" className="link">
          <div className="course-card">
          <img src={programmingLanguagesPartC} alt="Programming Languages, Part C" />
            <div className="course-info">
            <strong>Programming Languages, Part C</strong>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>
      <div className="personalized-section">
     
      </div>
    </div>
  );
};

export default Explore;
