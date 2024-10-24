import React from 'react';
import './Career.css'; 

const jobCategories = [
  {
    category: 'Data Science & Analytics (3)',
    jobs: ['Data Analyst', 'Data Scientist', 'Data Engineer']
  },
  {
    category: 'Software Engineering & IT (14)',
    jobs: [
      'Cybersecurity Professional', 'UX Designer', 'IT Support Specialist',
      'Product Manager', 'Full Stack Developer', 'Front-End Developer',
      'Application Developer', 'Back-End Developer', 'DevOps Engineer',
      'iOS Developer', 'IT Project Manager', 'Android Developer',
      'Data Warehouse Developer', 'Network Engineer'
    ]
  },
  {
    category: 'Sales & Marketing (5)',
    jobs: ['Digital Marketer', 'Social Media Marketer','Sales Operations Specialist','Marketing Analyst','Sales Development Representative']
  },
  {
    category: 'Business (8)',
    jobs: ['Project Manager', 'Supply Chain Analyst', 'Bookkeeper',' Business Intelligence Analyst','Human Resource Specialist', 'Technology Consultant', 'Career Coach', 'Customer Service Representative']
  },
];

const Career: React.FC = () => {
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
                <button key={i} className="job-button">{job}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div>
      <p>.</p>
     </div>
     
     </div>
  );
};

export default Career;
