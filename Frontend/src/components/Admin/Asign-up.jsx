import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { auth } from '../jsx/firebase-init'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AsignUp = ({ setAdminLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setSuccess('Account created successfully!')
      setEmail('')
      setPassword('')
      setAdminLoggedIn(true)
      navigate('/admin')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Sign Up</h2>
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
        <div className="buttonlogin">
          <button type="submit" className="login-button">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default AsignUp
