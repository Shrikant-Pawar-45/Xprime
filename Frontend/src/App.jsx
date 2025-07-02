import { useState, useEffect } from 'react'
import './App.css'
// import Videobg from './Videobg.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Profile from './components/jsx/Profile.jsx'
import Login from './components/jsx/Login.jsx'
import Register from './components/jsx/Signup.jsx'
import Gallery from './components/jsx/Nav/Gallery.jsx'
import About from './components/jsx/Nav/About.jsx'
import Contact from './components/jsx/Nav/Contact.jsx'
import Trending from './components/jsx/Nav/Trending.jsx'
import Amain from './components/Admin/Amain.jsx'
import Alogin from './components/Admin/Alogin.jsx'
import Asignup from './components/Admin/Asign-up.jsx'
import Aprofile from './components/Admin/AdminProfile.jsx'
import Forgetpassword from './components/jsx/Forgetpassword.jsx'
import UserProfile from './components/jsx/UserProfile.jsx'


import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { auth } from '../src/components/jsx/firebase-init'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(null)
  const [adminLoggedIn, setAdminLoggedIn] = useState(() => {
    const saved = localStorage.getItem('adminLoggedIn')
    return saved === 'true' ? true : false
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    localStorage.setItem('adminLoggedIn', adminLoggedIn)
  }, [adminLoggedIn])

  useEffect(() => {
    const handleUnload = () => {
      signOut(auth).catch((error) => {
        console.error('Error signing out on unload:', error)
      })
      localStorage.removeItem('adminLoggedIn')
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => {
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [])

  return (
    <Router>
      
      <div className='App'>
        {/* <Videobg /> */}
        <Header user={user} setUser={setUser} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          {!user && !adminLoggedIn && <Route path="/login" element={<Login />} />}
          {!user && !adminLoggedIn && <Route path="/signup" element={<Register />} />}
          {(user || adminLoggedIn) && <Route path="/login" element={<Navigate to="/" />} />}
          {(user || adminLoggedIn) && <Route path="/signup" element={<Navigate to="/" />} />}
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/adminlogin' element={<Alogin setAdminLoggedIn={setAdminLoggedIn} />} />
          <Route path='/admin' element={<Amain/>} />
          <Route path='/adminsignup' element={<Asignup setAdminLoggedIn={setAdminLoggedIn} />} />
          <Route path='/admin/profile' element={<Aprofile/>} />
          <Route path='/forgetpassword' element={<Forgetpassword/>} />
          <Route path='/userprofile' element={<UserProfile user={user} />} />
          {/* Redirects */}
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}
export default App
