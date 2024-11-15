import React, { useState } from 'react';
import { signUp } from '../../firebase/authService';
import { useNavigate } from 'react-router-dom';
import signupImage from '../../assets/image/SignUp_image.png';
import './SignUpPage.css';
const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      alert('User registered successfully');
      navigate('/auth');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign up</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-field">
            <span role="img" aria-label="email">📧</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-field">
            <span role="img" aria-label="password">🔒</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="checkbox-field">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to all statements in <a href="#terms">Terms of service</a></label>
          </div>
          <button className='submitButton' type="submit">Register</button>
        </form>
        <div className="already-member" >
          <a href="/auth">I am already a member</a>
        </div>


      </div>
      <div className="signup-image">
        <img src={signupImage} alt="signup image" />
      </div>
    </div>
  );
}

export default SignUpPage
