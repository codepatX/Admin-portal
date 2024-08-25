import React from 'react';
import './projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <header className="projects-header">
        <h2>Projects</h2>
        <div className="header-actions">
          <input type="text" placeholder="Search projects..." className="search-input" />
          <button className="new-project-btn">New Project</button>
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
            {/* Example Project Rows */}
            <tr>
              <td>1</td>
              <td>Hudson Tunnel Project</td>
              <td>PR-2341</td>
              <td>New York City</td>
              <td>Gordie Infrastructures</td>
              <td>James Will</td>
              <td><button className="action-btn">...</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Madison Square Garden</td>
              <td>PR-2342</td>
              <td>San Diego, California</td>
              <td>Will Jack Constructions</td>
              <td>Michael Bravo</td>
              <td><button className="action-btn">...</button></td>
            </tr>
            {/* Add more rows as needed */}
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
    </div>
  );
}

export default Projects;
