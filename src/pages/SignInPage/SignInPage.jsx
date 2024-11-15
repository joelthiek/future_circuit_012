import React, { useState } from 'react';
import { logIn, signInWithGoogle } from '../../firebase/authService';
import './SignInPage.css';
import Modal from './modal';
import ResetPassword from './resetPassword';
import googleImage from '../../assets/image/google_image.png';
import LoginImage from '../../assets/image/Login_image.jpg';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert('Logged in successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert('Logged in with Google successfully');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='headings'>Log In</h2>
        <div className="sign-up-link">
          <span>Don't have an account? </span>
          <a href="/register">Sign Up</a>
        </div>
        <form onSubmit={handleLogIn}>
          <div className="input-container">
            <span role="img" aria-label="email">📧</span>
            <input className='signin_Email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <span role="img" aria-label="password">🔒</span>
            <input className='signin_password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="forgot-password-link">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              Forgot Password?                    </a>
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <p className="social-login-text">Or</p>
        <div className="social-login">
          <button className="google" onClick={handleGoogleSignIn}>
            <img className='google_image' width={17} height={17} src={googleImage} alt="Google" />
            Log in with Google
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ResetPassword />
        </Modal>
      </div>
      <div className="login-image">
        <img src={LoginImage} alt="Login Image" />
      </div>
    </div>
  );
};

export default SignInPage
