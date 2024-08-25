import React from 'react';
import './dashboard.css';
import Projects from '../../pages/projects/projects';

function Dashboard() {
  return (
    <>
    <div className="dashboard">
    <aside className="sidebar">
        <div className="sidebar-logo">CTH</div>
        <ul className="sidebar-menu">
          <li className="active">Projects</li>
          <li>Reports</li>
          <li>All Interns</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="header-right">
            <div className="user-info">
              <span>Will Jacks</span>
              <span>Admin</span>
            </div>
            <div className="notifications"></div>
          </div>
        </header>
        <section className="content">
          <Projects/>
        </section>
      </main>
    </div>
    </>
  );
}

export default Dashboard;
