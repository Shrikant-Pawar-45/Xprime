import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import ProfileImage from '../../assets/Images/user.png'; // Placeholder image, replace with actual user image
import { auth, realtimeDb } from './firebase-init';
import { ref, get } from 'firebase/database';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          setError('No user is currently logged in.');
          setLoading(false);
          return;
        }
        const userRef = ref(realtimeDb, 'users/' + currentUser.uid);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUser(snapshot.val());
        } else {
          setError('User data not found.');
        }
      } catch (err) {
        setError('Failed to fetch user data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="profile-container"><p>Loading user data...</p></div>;
  }

  if (error) {
    return <div className="profile-container"><p className="error-message">{error}</p></div>;
  }

  const { fullName, email, mobileNumber, gender, birthdate } = user || {};

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <img src={ProfileImage} alt="User Profile" className="profile-image" />
        <div className="profile-details">
          <div className="profile-info-row">
            <label>Full Name:</label>
            <span>{fullName}</span>
          </div>
          <div className="profile-info-row">
            <label>Email:</label>
            <span>{email}</span>
          </div>
          <div className="profile-info-row">
            <label>Mobile:</label>
            <span>{mobileNumber}</span>
          </div>
          <div className="profile-info-row">
            <label>Gender:</label>
            <span>{gender}</span>
          </div>
          <div className="profile-info-row">
            <label>Birthdate:</label>
            <span>{birthdate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
