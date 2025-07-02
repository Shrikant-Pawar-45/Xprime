import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import * as Icon from 'react-bootstrap-icons';// You need to add a user logo image in assets folder
import './css/MenuBar.css';

const MenuBar = ({ user, setUser, adminLoggedIn, setAdminLoggedIn }) => {
  const [blur, setBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setBlur(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    console.log('Logout clicked')
    // Clear user session (you can adjust this based on how auth is managed)
    setUser(null); // Assuming you're managing user state in parent
    setAdminLoggedIn(false);
    localStorage.removeItem('user'); // Optional: remove token or user data from storage
    localStorage.removeItem('adminLoggedIn');
    setMenuOpen(false);
    alert('Logout successfully');
    navigate('/'); // Redirect to home page
  };
  return (
    <header className={`menu-bar${blur ? ' menu-bar--blur' : ''}`}>
      <div className="menu-bar-logo">
        <img src={logo} alt="Logo" />
        <Link to="/">Prime</Link>
      </div>
      
      <div className="menu-bar-toggle">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          &#9776;
        </button>
      </div>
      <nav className={`menu-bar-nav${menuOpen ? ' open' : ''}`}>
        <ul>
          {adminLoggedIn ? (
            <>
              <li><Link to="/admin" onClick={() => setMenuOpen(false)} className='bg-color'>Admin Dashboard</Link></li>
              <li><Link to='/gallery' onClick={() => setMenuOpen(false)} className='bg-color'>Gallery</Link></li>
              <li><Link to="/trending" onClick={() => setMenuOpen(false)} className='bg-color'>Trending</Link></li>
              <li><Link to="/admin/profile" onClick={() => setMenuOpen(false)} className='bg-color'>Admin Profile</Link></li>
              <li>
                <Icon.BoxArrowRight
                  size={24}
                  className='user-logo user-logo-pointer logout-icon'
                  onClick={handleLogout}
                  title="Logout"
                  style={{ cursor: 'pointer', color: 'white' }}
                />
              </li>
            </>
          ) : (
            <>
              <li><Link to="/" onClick={() => setMenuOpen(false)} className='bg-color'>Home</Link></li>
              <li><Link to='/gallery' onClick={() => setMenuOpen(false)} className='bg-color'>Gallery</Link></li>
              <li><Link to="/trending" onClick={() => setMenuOpen(false)} className='bg-color'>Trending</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)} className='bg-color'>About</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)} className='bg-color'>Contact</Link></li>
              {!user && (
                <>
                  <div className="ls"
                  >
                    <li className="menu-bar-login"><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                  <li className="menu-bar-signup"><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign-Up</Link></li>
                  </div>
                </>
              )}
              {user && (
                <>
                  <li className="menu-bar-profile-small-screen"><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
                  <li className="menu-bar-logout-small-screen"><Link to="/login" onClick={() => {handleLogout(); setMenuOpen(false);}}>Logout</Link></li>
                  <li className="menu-bar-user-logo ">
                    <Icon.PersonCircle
                      size={24}
                      className='user-logo user-logo-pointer'
                      onClick={() => setMenuOpen(!menuOpen)}
                    />
                    {menuOpen && (
                      <div className="user-menu-dropdown">
                        <div className="user-menu-item">
                          <li>{user && 
                          <Link to="/profile" onClick={() => setMenuOpen(false)} className="user-menu-link" >Profile</Link>
                          }</li>
                          <li><Link to="/login" onClick={handleLogout} className="user-menu-link">Logout</Link> </li>
                          
                          
                        </div>
                      </div>
                    )}
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
