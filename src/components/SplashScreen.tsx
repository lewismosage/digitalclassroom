import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; // You can style this as you like

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/explore', { replace: true }); // Navigate with replace
      window.history.replaceState(null, '', '/explore'); // Ensures user can't go back to splash
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <h1>Digital Classroom</h1>
    </div>
  );
};

export default SplashScreen;
