import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/" />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
