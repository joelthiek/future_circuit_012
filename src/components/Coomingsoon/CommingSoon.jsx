import React from 'react';
import './CommingSoon.css';

const CommingSoon = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Hold on, This feature is coming soon!</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CommingSoon;
