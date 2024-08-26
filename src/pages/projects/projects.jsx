import React, { useState, useEffect } from 'react';
import './projects.css';
import { FaSpinner } from 'react-icons/fa';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      const fetchedProjects = [
        {
          id: 1,
          name: "Hudson Tunnel Project",
          code: "PR-2341",
          city: "New York City",
          contractor: "Gordie Infrastructures",
          manager: "James Will"
        },
        {
          id: 2,
          name: "Madison Square Garden",
          code: "PR-2342",
          city: "San Diego, California",
          contractor: "Will Jack Constructions",
          manager: "Michael Bravo"
        }
        // Add more projects here
      ];
      setProjects(fetchedProjects);
      setLoading(false);
    }, 2000); // Simulate a delay of 2 seconds
  }, []);

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
                    <th>Project Name</th>
                    <th>Project Code</th>
                    <th>City</th>
                    <th>Contractor</th>
                    <th>Project Manager</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={project.id}>
                      <td>{index + 1}</td>
                      <td>{project.name}</td>
                      <td>{project.code}</td>
                      <td>{project.city}</td>
                      <td>{project.contractor}</td>
                      <td>{project.manager}</td>
                      <td><button className="action-btn">...</button></td>
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
    </div>
  );
}

export default Projects;
