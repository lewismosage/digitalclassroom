import React from 'react';
import { Link } from 'react-router-dom';
import GoogleProjectManagement from '../images/GoogleProjectManagement.png'; 
import FoundationofDigitalMarketing from '../images/FoundationofDigitalMarketing.png'; 
import AIForBusiness from '../images/AIForBusiness.png'; 
import Enterpreneurship from '../images/Enterpreneurship.png'; 
import BusinessStrategy from '../images/BusinessStrategy.png';
import GrowingYourBusiness from '../images/GrowingYourBusiness.png';
import LeadingtheModernDayBusiness from '../images/LeadingtheModernDayBusiness.png';
import MasterofBusinessAdministration from '../images/MasterofBusinessAdministration1.png';
import MScManagement from '../images/MScManagement.png';
import BachelorofScienceinMarketing from '../images/BachelorofScienceinMarketing.png';
import MasterofScienceinAccountancy from '../images/MasterofScienceinAccountancy.png';
import BusinessandFinancialModeling from '../images/BusinessandFinancialModeling.png';
import AskQuestionstoMakeDecisions from '../images/AskQuestionstoMakeDecisions.png';
import ExcelSkillsforBusiness from '../images/ExcelSkillsforBusiness.png';
import SocialMediaManagement from '../images/SocialMediaManagement.png';
import IntroductiontoPersonalFinance from '../images/IntroductiontoPersonalFinance.png'; 
import Bookkeeping from '../images/Bookkeeping.png'; 
import IntroductiontoFinanceandAccounting from '../images/IntroductiontoFinanceandAccounting.png'; 
import IntroductiontoFinance from '../images/IntroductiontoFinance.png'; 
import FinancingforStartupBusiness from '../images/FinancingforStartupBusiness.png'; 
import IntroductiontoCorporateFinance from '../images/IntroductiontoCorporateFinance.png'; 
import BusinessFoundations from '../images/BusinessFoundations.png'; 
import StrategicLeadershipandManagement from '../images/StrategicLeadershipandManagement.png'; 
import ProductManager from '../images/ProductManager.png'; 
import HumanResource from '../images/HumanResource.png'; 
import MarketingAnalytics from '../images/MarketingAnalytics.png'; 
import StrategicManagement from '../images/StrategicManagement.png'; 
import BrandManagement from '../images/BrandManagement.png'; 
import LeadingPeopleandTeams from '../images/LeadingPeopleandTeams.png'; 
import ITProjectManager from '../images/ITProjectManager.png'; 
import ConstructionManagement from '../images/ConstructionManagement.png';
import './Explore.css';

const Business = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Business</h2>
      <div className="categories">
      <Link to="/explore/business/leadership">
          <button className="category-btn-1">Leadership and Management</button>
        </Link>
        <Link to="/explore/business/finance">
          <button className="category-btn-2">Finance</button>
        </Link>
        <Link to="/explore/business/marketing">
          <button className="category-btn-3">Marketing</button>
        </Link>
        <Link to="/explore/business/businessstrategy">
          <button className="category-btn-4">Business Strategy</button>
        </Link>   
        <Link to="/explore/business/entrepreneurship">
          <button className="category-btn-5">Entrepreneurship</button>
        </Link> <Link to="/explore/business/businessessentials">
          <button className="category-btn-6">Business Essentials</button>
        </Link>  
      </div>  

   
      {/* Digital Transformation and Innovation */}
      <div className="popular-section">
        <h3>Digital Transformation and Innovation</h3>
        <div className="course-cards">
        <Link to="/course/google-project-management" className="link">
          <div className="course-card">
          <img src={GoogleProjectManagement} alt="Google Project Management" />
            <div className="course-info">
              <h4>Google Project Management</h4>
              <p>University of Nairobi</p>
              <p>Professional Certification</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/ai-for-business" className="link">
          <div className="course-card">
            <img src={AIForBusiness} alt="AI For Business" />
            <div className="course-info">
              <h4>AI For Business</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/foundation-of-digital-marketing" className="link">
          <div className="course-card">
            <img src={FoundationofDigitalMarketing} alt="Foundation of Digital Marketing" />
            <div className="course-info">
              <h4>Foundation of Digital Marketing</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/entrepreneurship" className="link">
          <div className="course-card">
            <img src={Enterpreneurship} alt="Enterpreneurship" />
            <div className="course-info">
              <h4>Entrepreneurship</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/business-strategy" className="link">
          <div className="course-card">
          <img src={BusinessStrategy} alt="Business Strategy" />
            <div className="course-info">
              <h4>Business Strategy</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/entrepreneurship-growing-your-business" className="link">
          <div className="course-card">
          <img src={GrowingYourBusiness} alt="Growing Your Business" />
            <div className="course-info">
              <h4>Entrepreneurship: Growing Your Business</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/leading-modern-day-business" className="link">
          <div className="course-card">
          <img src={LeadingtheModernDayBusiness} alt="Leading the Modern Day Business" />
            <div className="course-info">
              <h4>Leading the Modern Day Business</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
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
        <Link to="/course/mba" className="link">
        <div className="course-card">
            <img src={MasterofBusinessAdministration} alt="Master of Business Administration" />
            <div className="course-info">
            <strong>Master of Business Administration</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>

          <Link to="/course/msc-management" className="link">
          <div className="course-card">
            <img src={MScManagement} alt="MSc Management" />
            <div className="course-info">
            <strong>MSc Management</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>

          <Link to="/course/bachelor-science-marketing" className="link">
          <div className="course-card">
            <img src={BachelorofScienceinMarketing} alt="Bachelor of Science in Marketing" />
            <div className="course-info">
            <strong>Bachelor of Science in Marketing</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>

          <Link to="/course/msc-accountancy" className="link">
          <div className="course-card">
            <img src={MasterofScienceinAccountancy} alt="Master of Science in Accountancy" />
            <div className="course-info">
            <strong>Master of Science in Accountancy</strong>
              <p>University of Nairobi</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>

      
      {/* Data Driven Decision Making */}
      <div className="personalized-section">
        <h3>Data Driven Decision Making</h3>
        <div className="course-cards">
        <Link to="/course/business-financial-modeling" className="link">
        <div className="course-card">
            <img src={BusinessandFinancialModeling} alt="Business and Financial Modeling" />
            <div className="course-info">
              <h4>Business and Financial Modeling</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/ask-questions-make-data-driven-decisions" className="link">
          <div className="course-card">
            <img src={AskQuestionstoMakeDecisions} alt=">Ask Questions to Make Data-Driven Decisions" />
            <div className="course-info">
              <h4>Ask Questions to Make Data-Driven Decisions</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/excel-skills-for-business" className="link">
          <div className="course-card">
            <img src={ExcelSkillsforBusiness} alt=">Excel Skills for Business" />
            <div className="course-info">
              <h4>Excel Skills for Business</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/social-media-management" className="link">
          <div className="course-card">
            <img src={SocialMediaManagement} alt=">Social Media Management" />
            <div className="course-info">
              <h4>Social Media Management</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          {/* Add more course cards as needed */}
        </div>
      </div>

      {/* Finance Skills */}
      <div className="personalized-section">
        <h3>Finance Skills</h3>
        <div className="course-cards">
        <Link to="/course/introduction-to-finance-accounting" className="link">
        <div className="course-card">
            <img src={IntroductiontoFinanceandAccounting} alt="Introduction to Finance and Accounting" />
            <div className="course-info">
              <h4>Introduction to Finance and Accounting</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/introduction-to-corporate-finance" className="link">
          <div className="course-card">
            <img src={IntroductiontoCorporateFinance} alt="Introduction to Corporate Finance" />
            <div className="course-info">
              <h4>Introduction to Corporate Finance</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/introduction-to-personal-finance" className="link">
          <div className="course-card">
            <img src={IntroductiontoPersonalFinance} alt="Introduction to Personal Finance" />
            <div className="course-info">
              <h4>Introduction to Personal Finance</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/introduction-to-finance-basics" className="link">
          <div className="course-card">
            <img src={IntroductiontoFinance} alt=">Introduction to Finance: The Basics" />
            <div className="course-info">
              <h4>Introduction to Finance: The Basics</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/financing-for-startup-business" className="link">
          <div className="course-card">
            <img src={FinancingforStartupBusiness} alt="Financing for Startup Business" />
            <div className="course-info">
              <h4>Financing for Startup Business</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/bookkeeping" className="link">
          <div className="course-card">
            <img src={Bookkeeping} alt="Bookkeeping" />
            <div className="course-info">
              <h4>Bookkeeping</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>
          {/* Add more course cards as needed */}
        </div>
      </div>

      {/* Management Skills */}
      <div className="personalized-section">
        <h3>Management Skills</h3>
        <div className="course-cards">
        <Link to="/course/google-project-management" className="link">
          <div className="course-card">
          <img src={GoogleProjectManagement} alt="Google Project Management" />
            <div className="course-info">
              <h4>Google Project Management</h4>
              <p>University of Nairobi</p>
              <p>Professional Certification</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/business-foundations" className="link">
          <div className="course-card">
            <img src={BusinessFoundations} alt="Business Foundations" />
            <div className="course-info">
              <h4>Business Foundations</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/strategic-leadership-management" className="link">
          <div className="course-card">
            <img src={StrategicLeadershipandManagement} alt="Strategic Leadership and Management" />
            <div className="course-info">
              <h4>Strategic Leadership and Management</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/product-manager" className="link">
          <div className="course-card">
            <img src={ProductManager} alt="Product Manager" />
            <div className="course-info">
              <h4>Product Manager</h4>
              <p>University of Nairobi</p>
              <p>Professional Certificate</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/human-resource" className="link">
          <div className="course-card">
            <img src={HumanResource} alt="Human Resource" />
            <div className="course-info">
              <h4>Human Resource</h4>
              <p>University of Nairobi</p>
              <p>Professional Certificate</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          {/* Add more course cards as needed */}
        </div>
      </div>

      {/* Brand Management */}
      <div className="personalized-section">
        <h3>Brand Management</h3>
        <div className="course-cards">
        <Link to="/course/marketing-analytics" className="link">
        <div className="course-card">
            <img src={MarketingAnalytics} alt="Marketing Analytics" />
            <div className="course-info">
              <h4>Marketing Analytics</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.8 (2.5k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/brand-management" className="link">
          <div className="course-card">
            <img src={BrandManagement} alt="Brand Management" />
            <div className="course-info">
              <h4>Brand Management</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/social-media-management" className="link">
          <div className="course-card">
            <img src={SocialMediaManagement} alt="Social Media Management" />
            <div className="course-info">
              <h4>Social Media Management</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/strategic-management" className="link">
          <div className="course-card">
            <img src={StrategicManagement} alt="Strategic Management" />
            <div className="course-info">
              <h4>Strategic Management</h4>
              <p>University of Nairobi</p>
              <p>Course</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          {/* Add more course cards as needed */}
        </div>
      </div>

      {/* PROJECT MANAGEMENT */}
      <div className="personalized-section">
        <h3>Effective Project Management</h3>
        <div className="course-cards">
        <Link to="/course/google-project-management" className="link">
          <div className="course-card">
          <img src={GoogleProjectManagement} alt="Google Project Management" />
            <div className="course-info">
              <h4>Google Project Management</h4>
              <p>University of Nairobi</p>
              <p>Professional Certification</p>
              <p>⭐ 4.7k</p>
            </div>
          </div>
          </Link>

          <Link to="/course/construction-management" className="link">
          <div className="course-card">
            <img src={ConstructionManagement} alt="Construction Management" />
            <div className="course-info">
              <h4>Construction Management</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/it-project-manager" className="link">
          <div className="course-card">
            <img src={ITProjectManager} alt="IT Project Manager" />
            <div className="course-info">
              <h4>IT Project Manager</h4>
              <p>University of Nairobi</p>
              <p>Proffessional Certificate</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/leading-people-and-teams" className="link">
          <div className="course-card">
            <img src={LeadingPeopleandTeams} alt="Leading People and Teams" />
            <div className="course-info">
              <h4>Leading People and Teams</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          <Link to="/course/strategic-leadership" className="link">
          <div className="course-card">
            <img src={StrategicLeadershipandManagement} alt="Strategic Leadership and Management" />
            <div className="course-info">
              <h4>Strategic Leadership and Management</h4>
              <p>University of Nairobi</p>
              <p>Specialization</p>
              <p>⭐ 4.5 (143k)</p>
            </div>
          </div>
          </Link>

          {/* Add more course cards as needed */}
        </div>
      </div>

    </div>
  );
};

export default Business;
