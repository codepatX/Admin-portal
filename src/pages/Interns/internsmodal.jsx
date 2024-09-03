import React from 'react';
import './InternsModal.css';
import { FaUserCircle } from 'react-icons/fa';

const InternsModal = ({ data, onClose, title }) => {
  return (
    <div className="interns-modal-overlay">
      <div className="interns-modal-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2 className="modal-title">{title}</h2>

        <div className="profile-container">
          {data.profileUrl ? (
            <img 
              src={data.profileUrl} 
              alt={data.name} 
              className="profile-picture-modal" 
            />
          ) : (
            <FaUserCircle className="default-avatar-modal" />
          )}
        </div>

        <div className="details-grid">
          <div className="details-item">
            <span className="label">Name:</span>
            <span className="value">{data.name}</span>
          </div>
          <div className="details-item">
            <span className="label">Nationality:</span>
            <span className="value">{data.nationality}</span>
          </div>
          <div className="details-item">
            <span className="label">Email:</span>
            <span className="value">{data.email}</span>
          </div>
          <div className="details-item">
            <span className="label">Contact:</span>
            <span className="value">{data.contact}</span>
          </div>
          <div className="details-item">
            <span className="label">School:</span>
            <span className="value">{data.school}</span>
          </div>
          <div className="details-item">
            <span className="label">Course:</span>
            <span className="value">{data.course}</span>
          </div>
          <div className="details-item">
            <span className="label">Address:</span>
            <span className="value">{data.address}</span>
          </div>
          <div className="details-item">
            <span className="label">Gender:</span>
            <span className="value">{data.gender}</span>
          </div>
          <div className="details-item">
            <span className="label">Start Date:</span>
            <span className="value">{data.startDate}</span>
          </div>
          <div className="details-item">
            <span className="label">End Date:</span>
            <span className="value">{data.endDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternsModal;
