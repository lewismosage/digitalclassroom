import { Link } from 'react-router-dom';
import testBehaviorDrivenDevelopment from '../images/testBehaviorDrivenDevelopmen.png';
import fullStackDevelopment from '../images/fullStackDevelopment.png';
import generativeAIforSoftwareDevelopment from '../images/generativeAIforSoftwareDevelopment.jpg';
import businessIntelligence from '../images/businessIntelligence.png';
import deepLearning from '../images/deepLearning.jpg';
import './Explore.css'; 

const PersonalizedCourses = () => {
  

  return (
    <div className="explore-container">
      <h2 className="explore-title">Recommended Courses</h2>
 
 {/* Personalized Courses */}
 <div className="personalized-section">
 <h3>Personalized Courses for You</h3>
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

 </div>
  );
};

export default PersonalizedCourses;