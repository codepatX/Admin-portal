import React, { useState, useEffect } from 'react';
import './Interns.css';
import { FaSpinner } from 'react-icons/fa';

function Interns() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://cth-interns-portal.onrender.com/api/admin/interns/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setInterns(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
                <th>#</th>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((intern, index) => (
                <tr key={intern.id}>
                  <td>{index + 1}</td>
                  <td>{intern.name}</td>
                  <td>{intern.department}</td>
                  <td>{intern.email}</td>
                  <td>{intern.phone}</td>
                  <td><button className="action-btn">...</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default Interns;
