import React, { useState, useEffect } from 'react';
import './Interns.css';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import localStorage from "react-secure-storage";


function Interns() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInterns = async () => {
    let token= localStorage.getItem("token")
  try {
    const response = await axios.get('https://cth-interns-portal.onrender.com/api/admin/interns/all',
        {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }
    );
    if(response.status===200){

        let responseData= response.data.message
        setInterns(responseData);

     
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
                <th>Email</th>
                <th>Phone</th>
                <th>School</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((intern, index) => (
                <tr key={intern.id}>
                  <td>{index + 1}</td>
                  <td>{intern.name}</td>
                  <td>{intern.email}</td>
                  <td>{intern.contact}</td>
                  <td>{intern.school}</td>
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
