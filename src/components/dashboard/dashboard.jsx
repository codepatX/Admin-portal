import React, { useState } from 'react';
import './dashboard.css';
import Projects from '../../pages/projects/projects';
import Reports from '../../pages/reports/reports';
import Interns from '../../pages/Interns/Interns';


function Dashboard() {
  const [activePage, setActivePage] = useState('Projects');

  const renderPage = () => {
    switch (activePage) {
      case 'Projects':
        return <Projects />;
      case 'Reports':
        return <Reports />;
       case 'Interns':
         return <Interns />;
      default:
        return <Projects />;
    }
  };

  return (
    <>
      <div className="dashboard">
        <aside className="sidebar">
          <div className="sidebar-logo">CTH</div>
          <ul className="sidebar-menu">
            <li
              className={activePage === 'Projects' ? 'active' : ''}
              onClick={() => setActivePage('Projects')}
            >
              Projects
            </li>
            <li
              className={activePage === 'Reports' ? 'active' : ''}
              onClick={() => setActivePage('Reports')}
            >
              Reports
            </li>
            <li
              className={activePage === 'Interns' ? 'active' : ''}
              onClick={() => setActivePage('Interns')}
            >
              All Interns
            </li>
          </ul>
        </aside>
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </>
  );
}

export default Dashboard;
