import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'

const Alogin = ({ setAdminLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    // Hardcoded username and password check
    if (username === 'shrikant' && password === '264#Shrikant@45') {
      setSuccess('Login successful!')
      setUsername('')
      setPassword('')
      setAdminLoggedIn(true)
      navigate('/admin')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
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
        <div className="buttonlogin">
          <button type="submit" className="login-button">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Alogin
