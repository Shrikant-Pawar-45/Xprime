import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import { auth } from './firebase-init';
import { signInWithEmailAndPassword } from 'firebase/auth';
import google from '../../assets/Images/Google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Login successful!');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <div className="buttonlogin-k" style={{ marginTop: '20px' }}>
          <button type="submit" className="login-button">Login</button>
          <Link to="/forgetpassword">Forget Password !</Link>
        </div>
        <div className='Design'>
          <div className="design1"></div>
          <h5>Or</h5>
          <div className="design2"></div>
        </div>
       <div className="buttonlogin" style={{ marginTop: '30px' }}>
          <Link to="/adminlogin" className="login-button" style={{textDecoration:'none',width:'100%'}}>Admin</Link>
        </div>
       
      </form>
    </div>
  );
};
export default Login;
