// src/components/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfileImage from '../images/profileimage.jpeg';
import './Dashboard.css';

interface UserData {
  name: string;
  email: string;
  profileImage?: string; // Optional profile image URL
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Retrieve user data from localStorage (or from API)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiry');
    localStorage.removeItem('user'); // Clear user data
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile-section">
          <img
            src={user?.profileImage || defaultProfileImage}
            alt="Profile"
            className="profile-pic"
          />
          <p>{user?.name || 'Guest User'}</p>
          <p>{user?.email || 'guest@example.com'}</p>
          <h3>Student's Hub</h3>
        </div>
        <nav className="navigation">
          <a href="/learn">My Learning</a>
          <a href="/personalized-courses">Recommended Courses</a>
          <a href="#progress">Progress</a>
          <a href="#resources">Resources</a>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Welcome back{user?.name ? `, ${user.name}!` : '!'}</h1>
          <p>It’s a beautiful day! Let’s continue your learning journey.</p>
        </header>

        <div className="dashboard-cards">
          <section className="card progress-card">
            <h2>Your Learning Progress</h2>
            <div className="progress-circle">
            </div>
            <p>Current Course: Data Science Bootcamp</p>
          </section>

          <section className="card recommended-courses">
            <h2>Recommended Courses</h2>
            <div className="course-item">
              <p>Machine Learning</p>
              <span>12 Hours</span>
            </div>
            <div className="course-item">
              <p>Deep Learning Specialization</p>
              <span>15 Hours</span>
            </div>
          </section>

          <section className="card upcoming-events">
            <h2>Upcoming Events</h2>
            <div className="event-item">
              <p>Group Study Session</p>
              <span>Today at 3:00 PM</span>
            </div>
            <div className="event-item">
              <p>1:1 with Advisor</p>
              <span>Tomorrow at 10:00 AM</span>
            </div>
          </section>

          <section className="card resources">
            <h2>Your Resources</h2>
            <p>Access to additional learning materials</p>
            <div className="resource-item">PDFs</div>
            <div className="resource-item">Recorded Lectures</div>
            <div className="resource-item">Discussion Forums</div>
            <div className="resource-item">Downloads</div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
