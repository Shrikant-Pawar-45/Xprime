import React, { Component } from 'react';
import './AdminProfile.css';
import ProfileImage from '../../assets/Images/lk.png'; // Placeholder image, replace with actual admin image

export class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        fullName: 'Admin Name',
        email: 'admin@example.com',
        mobile: '+91 1234567890',
        gender: 'Not Specified',
        birthdate: '01-01-1970',
        profileImage: 'https://via.placeholder.com/150' // Replace with admin's actual image URL
      }
    };
  }

  render() {
    const { fullName, email, mobile, gender, birthdate, profileImage } = this.state.admin;
    return (
      <div className="admin-profile-container">
        <h2>Admin Profile</h2>
        <div className="admin-profile-card">
          <img src={ProfileImage} alt="Admin Profile" className="admin-profile-image" />
          <div className="admin-profile-details">
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
                  <td>{mobile}</td>
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
  }
}

export default AdminProfile;
