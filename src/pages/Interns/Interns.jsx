import React, { useState, useEffect } from 'react';
import './Interns.css';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import localStorage from "react-secure-storage";
import DetailsModal from '../../components/detailsModal/detailsModal';

function Interns() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const fetchInterns = async () => {
    let token = localStorage.getItem("token");
    try {
      const response = await axios.get('https://cth-interns-portal.onrender.com/api/admin/interns/all', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        let responseData = response.data.message;
        setInterns(responseData.sort((a, b) => new Date(b.date) - new Date(a.date)));
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterns();
  }, []);

  const handleActionClick = (intern) => {
    setSelectedItem(intern);
    setModalTitle('Intern Details');
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="interns-main-container">
      <header className="interns-header">
        <h2>All Interns</h2>
        <input type="text" placeholder="Search interns..." className="search-input" />
      </header>

      <section className="interns-list">
        {loading ? (
          <div className="loader-container">
            <FaSpinner className="spinner" /> Loading interns...
          </div>
        ) : error ? (
          <div className="error-message">
            <p>Failed to load interns: {error.message}</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>School</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((intern) => (
                <tr key={intern.id}>
                  <td>
                    <img 
                      src={intern.profilePictureUrl || 'default-profile-pic-url'} 
                      alt={intern.name} 
                      className="profile-picture" 
                    />
                  </td>
                  <td>{intern.name}</td>
                  <td>{intern.email}</td>
                  <td>{intern.contact}</td>
                  <td>{intern.school}</td>
                  <td>
                    <button 
                      className="action-btn" 
                      onClick={() => handleActionClick(intern)}
                    >
                      ...
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {selectedItem && (
        <DetailsModal 
          data={selectedItem} 
          onClose={handleCloseModal} 
          title={modalTitle} 
        />
      )}
    </div>
  );
}

export default Interns;
