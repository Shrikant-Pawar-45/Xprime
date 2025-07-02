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
          <table>
            <tbody>
              <tr>
                <td><strong>Full Name:</strong></td>
                <td>{fullName}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{email}</td>
              </tr>
              <tr>
                <td><strong>Mobile:</strong></td>
                <td>{mobileNumber}</td>
              </tr>
              <tr>
                <td><strong>Gender:</strong></td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td><strong>Birthdate:</strong></td>
                <td>{birthdate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
