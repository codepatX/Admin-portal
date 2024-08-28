import React, { useState, useEffect } from "react";
import './projects.css';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import localStorage from "react-secure-storage";
import DetailsModal from "../../components/detailsModal/detailsModal";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalTitle, setModalTitle] = useState('');
    const token = localStorage.getItem('token');

    const fetchProjects = async () => {
        try {
            const response = await axios.get('https://cth-interns-portal.onrender.com/api/admin/interns/projects', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setProjects(response.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleActionClick = (project) => {
        setSelectedItem(project);
        setModalTitle('Project Details');
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="projects-main-container">
            <header className="profile-header">
                <h2 className="projects-title">Projects</h2>
                <div className="profile-container">
                    <img src="profile-picture-url" alt="Profile" className="profile-picture" />
                    <div className="profile-info">
                        <h2 className="profile-name">John Doe</h2>
                        <p className="profile-role">Project Manager</p>
                    </div>
                </div>
            </header>

            <div className="projects-content">
                {loading ? (
                    <div className="loader-container">
                        <FaSpinner className="spinner" /> Loading projects...
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>Failed to load projects: {error.message}</p>
                    </div>
                ) : (
                    <>
                        <header className="projects-header">
                            <div className="header-actions">
                                <input type="text" placeholder="Search projects..." className="search-input" />
                            </div>
                        </header>
                        <section className="projects-list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Github URL</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, index) => (
                                        <tr key={project.id}>
                                            <td>{index + 1}</td>
                                            <td>{project.title}</td>
                                            <td>{project.description}</td>
                                            <td><a href={project.githubUrl}>{project.githubUrl}</a></td>
                                            <td>
                                                <button className="action-btn" onClick={() => handleActionClick(project)}>...</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                        <footer className="projects-footer">
                            <div className="pagination">
                                <button className="page-btn">Previous</button>
                                <button className="page-btn">1</button>
                                <button className="page-btn">2</button>
                                <button className="page-btn">3</button>
                                <button className="page-btn">Next</button>
                            </div>
                        </footer>
                    </>
                )}
            </div>

            {selectedItem && (
                <DetailsModal data={selectedItem} onClose={handleCloseModal} title={modalTitle} />
            )}
        </div>
    );
}

export default Projects;
