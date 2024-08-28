import React from 'react';
import './detailsModal.css';

const DetailsModal = ({ data, onClose, title }) => {
    if (!data) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-btn" onClick={onClose}></button>
                <h2>{title}</h2>
                <div className="modal-content">
                    {Object.keys(data).map((key) => (
                        <div key={key} className="modal-item">
                            <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>
                            <p>{data[key]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;
