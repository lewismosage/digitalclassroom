import React from 'react'; 
import './SearchPage.css'; 

// Define popular searches with paths
const popularSearches = [
  { term: 'google cybersecurity professional certificate', path: '/course/google-cybersecurity' },
  { term: 'digital marketing', path: '/course/digital-marketing' },
  { term: 'google data analytics professional certificate', path: '/course/google-data-analytics' },
  { term: 'machine learning', path: '/course/machine-learning' },
  { term: 'ai', path: '/course/ai' },
  { term: 'data analytics', path: '/course/data-analytics' },
  { term: 'project management', path: '/course/project-management' },
  { term: 'cybersecurity', path: '/course/cybersecurity' },
  
  { term: 'ai for everyone', path: '/course/ai-for-everyone' },
  { term: 'psychology', path: '/course/psychology' },
  { term: 'power bi', path: '/course/power-bi' },
  { term: 'deep learning specialization', path: '/course/deep-learning' },
  { term: 'finance', path: '/course/finance' },
];

const SearchPage: React.FC = () => {
  return (
    <div className="search-page-container">
      {/* Search Bar */}
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="What do you want to learn?"
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="popular-searches">
        <h2>Popular Searches</h2>
        <ul>
          {popularSearches.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="search-link">
                <span className="search-icon">↩</span> {item.term}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
