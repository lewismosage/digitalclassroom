import React, { useState } from 'react';
import './Career.css';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const jobCategories = [
  {
    category: 'Data Science & Analytics (3)',
    jobs: [
      { title: 'Data Analyst', description: 'Collect, organize, and transform data to make informed decisions.', salary: '$90,500 median salary', jobsAvailable: '82,489 jobs available', courseId: 'google-data-analytics' },
      { title: 'Data Scientist', description: 'Analyze complex data to help drive business decisions.', salary: '$120,000 median salary', jobsAvailable: '50,000 jobs available', courseId: 'data-science' },
      { title: 'Data Engineer', description: 'Build data pipelines and ensure data integrity.', salary: '$110,000 median salary', jobsAvailable: '35,000 jobs available', courseId: 'cloud-computing' }
    ]
  },
  {
    category: 'Software Engineering & IT (14)',
    jobs: [
      { title: 'Cybersecurity Professional', description: 'Protect systems and networks from cyber threats.', salary: '$100,000 median salary', jobsAvailable: '75,000 jobs available', courseId: 'google-cybersecurity' },
      { title: 'UX Designer', description: 'Design user-friendly interfaces and experiences.', salary: '$85,000 median salary', jobsAvailable: '40,000 jobs available', courseId: 'ux-design' },
      { title: 'IT Support Specialist', description: 'Provide support and troubleshoot IT systems.', salary: '$60,000 median salary', jobsAvailable: '90,000 jobs available', courseId: 'it-support' },
      { title: 'Product Manager', description: 'Oversee product development and manage lifecycle.', salary: '$105,000 median salary', jobsAvailable: '30,000 jobs available', courseId: 'product-management' },
      { title: 'Full Stack Developer', description: 'Develop both front-end and back-end of web applications.', salary: '$100,000 median salary', jobsAvailable: '65,000 jobs available', courseId: 'full-stack-development' },
      { title: 'Front-End Developer', description: 'Build and implement front-end web interfaces.', salary: '$80,000 median salary', jobsAvailable: '70,000 jobs available', courseId: 'front-end-development' },
      { title: 'Back-End Developer', description: 'Develop and maintain server-side application logic.', salary: '$95,000 median salary', jobsAvailable: '50,000 jobs available', courseId: 'back-end-development' },
      { title: 'DevOps Engineer', description: 'Ensure smooth deployment and operation of software.', salary: '$110,000 median salary', jobsAvailable: '45,000 jobs available', courseId: 'devops-engineering' },
      { title: 'IT Project Manager', description: 'Coordinate IT projects to ensure timely delivery.', salary: '$90,000 median salary', jobsAvailable: '40,000 jobs available', courseId: 'it-project-management' },
      { title: 'Network Engineer', description: 'Design, implement, and maintain computer networks.', salary: '$80,000 median salary', jobsAvailable: '25,000 jobs available', courseId: 'network-engineering' }
    ]
  },
  {
    category: 'Sales & Marketing (5)',
    jobs: [
      { title: 'Digital Marketer', description: 'Create and manage digital marketing campaigns.', salary: '$65,000 median salary', jobsAvailable: '55,000 jobs available', courseId: 'digital-marketing' },
      { title: 'Social Media Marketer', description: 'Manage brand presence on social media platforms.', salary: '$55,000 median salary', jobsAvailable: '45,000 jobs available', courseId: 'social-media-marketing' },
      { title: 'Sales Operations Specialist', description: 'Optimize sales processes and improve sales effectiveness.', salary: '$70,000 median salary', jobsAvailable: '30,000 jobs available', courseId: 'sales-operations' },
      { title: 'Marketing Analyst', description: 'Analyze market data to guide marketing strategies.', salary: '$60,000 median salary', jobsAvailable: '35,000 jobs available', courseId: 'marketing-analytics' },
      { title: 'Sales Development Representative', description: 'Identify and qualify sales opportunities.', salary: '$50,000 median salary', jobsAvailable: '40,000 jobs available', courseId: 'sales-development' }
    ]
  },
  {
    category: 'Business (8)',
    jobs: [
      { title: 'Project Manager', description: 'Plan, execute, and monitor projects to meet goals.', salary: '$85,000 median salary', jobsAvailable: '60,000 jobs available', courseId: 'project-management' },
      { title: 'Supply Chain Analyst', description: 'Optimize supply chain operations for efficiency.', salary: '$70,000 median salary', jobsAvailable: '20,000 jobs available', courseId: 'supply-chain-analytics' },
      { title: 'Bookkeeper', description: 'Maintain financial records for accuracy and compliance.', salary: '$50,000 median salary', jobsAvailable: '30,000 jobs available', courseId: 'bookkeeping' },
      { title: 'Business Intelligence Analyst', description: 'Analyze business data for strategic insights.', salary: '$80,000 median salary', jobsAvailable: '25,000 jobs available', courseId: 'business-intelligence' },
      { title: 'Human Resource Specialist', description: 'Recruit, hire, and manage personnel for organizations.', salary: '$60,000 median salary', jobsAvailable: '50,000 jobs available', courseId: 'human-resources' },
      { title: 'Technology Consultant', description: 'Advise businesses on technology solutions.', salary: '$90,000 median salary', jobsAvailable: '15,000 jobs available', courseId: 'technology-consulting' },
      { title: 'Career Coach', description: 'Guide individuals in career development and planning.', salary: '$55,000 median salary', jobsAvailable: '10,000 jobs available', courseId: 'career-coaching' },
      { title: 'Customer Service Representative', description: 'Assist customers with inquiries and issue resolution.', salary: '$40,000 median salary', jobsAvailable: '70,000 jobs available', courseId: 'customer-service' }
    ]
  }
];

const Career: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<null | { title: string, description: string, salary: string, jobsAvailable: string, courseId: string }>(null);
  const navigate = useNavigate(); // Use navigate for redirecting

  const handleJobClick = (job: { title: string, description: string, salary: string, jobsAvailable: string, courseId: string }) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  const goToCoursePage = (courseId: string) => {
    navigate(`/course/${courseId}`); 
  };

  return (
    <div className="career-page">
      {/* Header */}
      <header className="career-header">
        <h1>What job role interests you?</h1>
        <p>
          Pick one below, and we'll suggest a learning path to get you started.
          (You can update this at any time.)
        </p>
      </header>

      {/* Job Categories */}
      <div className="career-categories">
        {jobCategories.map((category, index) => (
          <div key={index} className="career-category">
            <h2>{category.category}</h2>
            <div className="career-job-buttons">
              {category.jobs.map((job, i) => (
                <button 
                  key={i} 
                  className="job-button" 
                  onClick={() => handleJobClick(job)}
                >
                  {job.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for job details */}
      {selectedJob && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedJob.title}</h3>
              {/* Arrow Icon that redirects to the course page */}
              <button 
                className="arrow-button" 
                onClick={() => goToCoursePage(selectedJob.courseId)}
              >
                →
              </button>
            </div>
            <p>{selectedJob.description}</p>
            <p><strong>{selectedJob.salary}</strong></p>
            <p>{selectedJob.jobsAvailable}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
