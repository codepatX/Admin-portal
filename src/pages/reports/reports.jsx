import React, { useState, useEffect } from "react";
import './reports.css';
import { FaSpinner } from 'react-icons/fa';

function Reports() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        setTimeout(() => {
            const fetchedData = [
                {
                    id: 1,
                    reportName: "Monthly Financial Report",
                    date: "July 2024",
                    status: "Completed",
                    manager: "John Doe",
                },
                {
                    id: 2,
                    reportName: "Quarterly Sales Report",
                    date: "Q2 2024",
                    status: "Pending",
                    manager: "Jane Smith",
                },
                {
                    id: 3,
                    reportName: "Annual Performance Report",
                    date: "2023",
                    status: "Completed",
                    manager: "Michael Brown",
                },
            ];
            setReportData(fetchedData);
            setLoading(false);
        }, 2000); // Simulate a delay of 2 seconds
    }, []);

    return (
        <div className="reports-main-container">
            <div className="reports-navbar">
                <header className="reports-header">
                    <h2 className="reports-title">Reports</h2>
                    <div className="reports-actions">
                        <input
                            type="text"
                            placeholder="Search reports..."
                            className="search-input"
                        />
                    </div>
                </header>
            </div>

            <div className="reports-content">
                {loading ? (
                    <div className="loader-container">
                        <FaSpinner className="spinner" /> Loading reports...
                    </div>
                ) : (
                    <section className="reports-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Report Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Manager</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportData.map((report) => (
                                    <tr key={report.id}>
                                        <td>{report.id}</td>
                                        <td>{report.reportName}</td>
                                        <td>{report.date}</td>
                                        <td>{report.status}</td>
                                        <td>{report.manager}</td>
                                        <td><button className="action-btn">...</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}
            </div>
        </div>
    );
}

export default Reports;
