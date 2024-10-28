import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';  // Import Google and Facebook icons
import './LoginSignupPage.css';

const LoginSignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // For toggling between login and signup

  const handleGoogleLogin = () => {
    alert('Google login initiated.');
  };

  const handleFacebookLogin = () => {
    alert('Facebook login initiated.');
  };

  const handleSSOLogin = () => {
    alert('SSO login initiated.');
  };

  const handleEmailLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('Please enter both email and password.');
    } else {
      alert(`Logged in with Email: ${email}`);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <div className="digital-classroom-logo">
          <h1>Digital Classroom</h1>
          <p>Take the world's best courses online from top universities and industry partners</p>
        </div>
      </div>

      <div className="auth-options">
        <h2>{isCreatingAccount ? 'Sign Up' : 'Log in to your Account'}</h2>
        <p>Welcome back! Please, enter your information</p>

        {/* Email login section */}
        <div className="email-login">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-extras">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>

          <button className="auth-button login" onClick={handleEmailLogin}>
            Log In
          </button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <div className="separator">or</div>

        {/* Google, Facebook, and SSO buttons */}
        <button className="auth-button google" onClick={handleGoogleLogin}>
          <FaGoogle className="icon" /> Log in with Google
        </button>
        
        <button className="auth-button facebook" onClick={handleFacebookLogin}>
          <FaFacebook className="icon" /> Log in with Facebook
        </button>
        
        <button className="auth-button sso" onClick={handleSSOLogin}>
          Log in with your organization (SSO)
        </button>

        <button className="signup-button" onClick={() => setIsCreatingAccount(!isCreatingAccount)}>
          {isCreatingAccount ? 'Already have an account? Log in' : 'New to Digital Classroom? Create an Account!'}
        </button>
        </div>

      <p className="terms">
        By creating an account under any method above, you accept Digital Classroom's <a href="/terms-of-use">Terms of Use</a> and <a href="/privacy-notice">Privacy Notice</a>.
      </p>
    </div>
   
  );
};

export default LoginSignupPage;




/*
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './LoginSignupPage.css';

const LoginSignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sessionWarning, setSessionWarning] = useState(false);  // Modal visibility for session expiration warning
  const navigate = useNavigate();

  const API_BASE_URL = 'https://api.example.com';
  const LOGIN_ENDPOINT = `${API_BASE_URL}/auth/login`;
  const SIGNUP_ENDPOINT = `${API_BASE_URL}/auth/signup`;
  const REFRESH_ENDPOINT = `${API_BASE_URL}/auth/refresh`;

  // Token storage with expiration
  const storeToken = (token: string, expiresIn: number) => {
    const expirationDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpiry', expirationDate.toString());
  };
  const clearToken = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiry');
  };
  const isTokenExpired = () => {
    const expiry = localStorage.getItem('authTokenExpiry');
    return expiry ? new Date().getTime() > parseInt(expiry) : true;
  };
  const getToken = () => {
    if (isTokenExpired()) {
      clearToken();
      return null;
    }
    return localStorage.getItem('authToken');
  };

  // Refresh token if close to expiration
  const refreshToken = async () => {
    const expiry = localStorage.getItem('authTokenExpiry');
    const timeRemaining = expiry ? parseInt(expiry) - new Date().getTime() : 0;

    if (timeRemaining < 5 * 60 * 1000) {  // Refresh if less than 5 minutes remaining
      try {
        const response = await axios.post(REFRESH_ENDPOINT, {
          token: getToken(),
        });

        if (response.status === 200 && response.data.token) {
          storeToken(response.data.token, response.data.expiresIn);
        } else {
          setSessionWarning(true);  // Show warning modal if refresh fails
        }
      } catch {
        setSessionWarning(true);  // Show warning modal if error occurs
      }
    }
  };

  // Check token expiration on each page load and periodically
  useEffect(() => {
    if (getToken()) {
      navigate('/dashboard');
    }
    const interval = setInterval(() => {
      refreshToken();
    }, 5 * 60 * 1000);  // Check every 5 minutes
    return () => clearInterval(interval);
  }, [navigate]);

  const validateInputs = () => {
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleEmailLogin = async () => {
    if (!validateInputs()) return;

    setErrorMessage('');
    setLoading(true);
    try {
      const endpoint = isCreatingAccount ? SIGNUP_ENDPOINT : LOGIN_ENDPOINT;
      const response = await axios.post(endpoint, { email, password });

      if (response.status === 200 && response.data.token) {
        storeToken(response.data.token, response.data.expiresIn);
        alert(`Success! ${isCreatingAccount ? 'Account created' : 'Logged in'}.`);
        navigate('/dashboard');
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error(errorMessage);
      setErrorMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearToken();
    navigate('/login');
  };

  const handleGoogleLogin = () => alert('Google login initiated.');
  const handleFacebookLogin = () => alert('Facebook login initiated.');
  const handleSSOLogin = () => alert('SSO login initiated.');

  return (
    <div className="login-container">
      <div className="header">
        <div className="digital-classroom-logo">
          <h1>Digital Classroom</h1>
          <p>Take the world's best courses online from top universities and industry partners</p>
        </div>
      </div>

      <div className="auth-options">
        <h2>{isCreatingAccount ? 'Sign Up' : 'Log in to your Account'}</h2>
        <p>Welcome back! Please, enter your information</p>

        {/* Email login section *}
        <div className="email-login">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-extras">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>

          <button className="auth-button login" onClick={handleEmailLogin} disabled={loading}>
            {loading ? 'Loading...' : isCreatingAccount ? 'Sign Up' : 'Log In'}
          </button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <div className="separator">or</div>

        {/* Google, Facebook, and SSO buttons *}
        <button className="auth-button google" onClick={handleGoogleLogin}>
          <FaGoogle className="icon" /> Log in with Google
        </button>



                                              
        
        <button className="auth-button facebook" onClick={handleFacebookLogin}>
          <FaFacebook className="icon" /> Log in with Facebook
        </button>
        
        <button className="auth-button sso" onClick={handleSSOLogin}>
          Log in with your organization (SSO)
        </button>

        <button className="signup-button" onClick={() => setIsCreatingAccount(!isCreatingAccount)}>
          {isCreatingAccount ? 'Already have an account? Log in' : 'New to Digital Classroom? Create an Account!'}
        </button>
      </div>

      <p className="terms">
        By creating an account under any method above, you accept Digital Classroom's <a href="/terms-of-use">Terms of Use</a> and <a href="/privacy-notice">Privacy Notice</a>.
      </p>

      {/* Session Expiry Warning Modal *}
      {sessionWarning && (
        <div className="modal">
          <div className="modal-content">
            <h3>Session Expired</h3>
            <p>Your session has expired. Please log in again to continue.</p>
            <button onClick={handleLogout}>Log In Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignupPage;
*/
