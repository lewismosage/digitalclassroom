import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../images/explore.png'; 
import careerIcon from '../images/career.jpg';
import learnIcon from '../images/learn.png';
import searchIcon from '../images/search.png';
import profileIcon from '../images/profile.png';


const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/explore">
        <img src={exploreIcon} alt="Explore Icon" className="nav-icon" />
        Explore
      </Link>
      <Link to="/career">
        <img src={careerIcon} alt="Career Icon" className="nav-icon" />
        Career
      </Link>
      <Link to="/learn">
        <img src={learnIcon} alt="Learn Icon" className="nav-icon" />
        Learn
      </Link>
      <Link to="/search">
        <img src={searchIcon} alt="Search Icon" className="nav-icon" />
        Search
      </Link>
      <Link to="/profile">
        <img src={profileIcon} alt="Profile Icon" className="nav-icon" />
        Profile
      </Link>
    </nav>
  );
};

export default NavBar;
