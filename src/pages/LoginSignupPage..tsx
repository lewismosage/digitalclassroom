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
            <a href="#" className="forgot-password">Forgot Password?</a>
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
        By creating an account under any method above, you accept Digital Classroom's <a href="#">Terms of Use</a> and <a href="#">Privacy Notice</a>.
      </p>
    </div>
  );
};

export default LoginSignupPage;
