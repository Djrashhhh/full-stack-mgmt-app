// src/components/Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; // Ensure you have styling for the layout

const Layout = () => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/create-task">Create Task</Link></li>
          <li><Link to="/inventory/devices">Inventory</Link></li>
          <li><Link to="/inventory/add">Add Device</Link></li>
          <li><Link to="/inventory/update">Update Device</Link></li>
          <li><Link to="/inventory/delete">Delete Device</Link></li>
          <li><Link to="/issuing">Issued Devices</Link></li>
          <li><Link to="/issuing/add">Add Issuing</Link></li>
          <li><Link to="/issuing/status">Delete Issuing</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
