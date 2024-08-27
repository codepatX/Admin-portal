import React, { useState, useEffect } from "react";
import './reports.css';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import localStorage from "react-secure-storage";

function Reports() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchReports = async () => {
        const token = localStorage.getItem('token'); 
        try {
            const response = await axios.get('https://cth-interns-portal.onrender.com/api/admin/interns/reports', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            
            if (response.status === 200) {
                const responseData = response.data.message; 
                setReportData(responseData);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    return (
        <div className="reports-main-container">
            <header className="reports-header">
                <h2>All Reports</h2>
                <input type="text" placeholder="Search reports..." className="search-input" />
            </header>

            <section className="reports-list">
                {loading ? (
                    <div className="loader-container">
                        <FaSpinner className="spinner" /> Loading reports...
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>Failed to load reports: {error.message}</p>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Week</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((report, index) => (
                                <tr key={report.id}>
                                    <td>{report.reportName}</td>
                                    <td>{report.week}</td>
                                    <td>{report.title}</td>
                                    <td>{report.body}</td>
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

export default Reports;
