import React, { Component } from 'react';
import './AdminProfile.css';
import ProfileImage from '../../assets/Images/lk.png'; // Placeholder image, replace with actual admin image

export class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        fullName: 'Shrikant Ashok Pawar',
        email: 'shrikantpawar493@gmail.com',
        mobile: '+91 8862007036',
        gender: 'Male',
        birthdate: '07-07-2005'
       // Replace with admin's actual image URL
      }
    };
  }

  render() {
    const { fullName, email, mobile, gender, birthdate } = this.state.admin;
    return (
      <div className="profile-container">
            <h2>Admin Profile </h2>
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
                  <span>{mobile}</span>
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
  }
}

export default AdminProfile;
