import React from 'react';
import './SeeAll.css'; 

const exploretopics = [
  { name: 'Arts and Humanities', url: '/explore/arts' },
  { name: 'Business', url: '/explore/business' },
  { name: 'Computer Science', url: '/explore/computer-science' },
  { name: 'Health', url: '/explore/health' },
  { name: 'Information Technology', url: '/explore/it' },
  { name: 'Math and Logic', url: '/explore/maths' },
  { name: 'Data Science', url: '/explore/data-science' },
  { name: 'Personal Development', url: '/explore/personaldevelopment' },
  { name: 'Social Sciences', url: '/explore/socialsciences' },
  { name: 'Language Learning', url: '/explore/languages' },
  { name: 'Physical Sciences and Engineering', url: '/explore/physcialsciencesengineering' },
];

const SeeAll: React.FC = () => {
  return (
    <div className="explore-by-topic-container">
      <h2>Explore by Topic</h2>
      <ul>
        {exploretopics.map((topic, index) => (
          <li key={index}>
            <a href={topic.url} className="topic-link">
              <span className="search-icon">📚</span> {topic.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeeAll;
