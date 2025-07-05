import React, { useState, useEffect } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import '../css/Login.css';

const Forgetpassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (timer > 0) {
      setError(`Please wait ${timer} seconds before sending another email.`);
      return;
    }
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccess('Password reset email sent successfully.');
        setError('');
        setEmail('');
        setTimer(60); // 60 seconds cooldown
      })
      .catch((error) => {
        setError(error.message);
        setSuccess('');
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Forget Password</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={timer > 0}
          />
        </div>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        {timer > 0 && (
          <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>
            Please wait {timer} seconds before sending another email.
          </p>
        )}
        <div className="buttonlogin">
          <button type="submit" className="login-button" disabled={timer > 0}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forgetpassword;
