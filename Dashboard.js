import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Ensure the CSS file is imported

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication data (e.g., tokens) here if necessary
    // For example:
    localStorage.removeItem('TOKEN');

    // Redirect to the login page
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleViewTasks = () => {
    navigate('/tasks');
};

useEffect(()=> {
  if(localStorage.getItem('TOKEN') == null) {
    navigate('/');
  }

  console.log(JSON.parse(localStorage.getItem('TOKEN')).user_id)
}, [navigate])




  return (
    <div className="dashboard-container">
      <div className="top-navbar">
      <div className="navbar-content">
        <h1 className="dashboard-title">Welcome to the Dashboard</h1>
        <div className="profile-container">
          <button className="profile-icon" onClick={toggleDropdown}>Profile</button>
          {dropdownOpen && (
            <div className="dropdown-menu">
             
              
              <button onClick={handleLogout} className="dropdown-item">Logout</button>
            </div>
          )}
          </div>
        </div>
      </div>
      <div className="side-navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Tasks</button>
        {/* Add buttons for "See All Tasks", "Create New Task", and "Update Task" */}
        <button onClick={handleViewTasks} className="view-tasks-button">See All Tasks</button>
        <button onClick={() => navigate('/create-task')}>Create a Task</button>
        <button onClick={handleViewTasks} className="view-tasks-button">Update  Tasks</button>
       {/*Inventory section*/ }
       <button className="nav-button">Inventory</button>
       <button onClick={() => navigate('/inventory/devices')}>Device List</button>
       <button onClick={() => navigate('/inventory/add')}>Add a Device</button>
       <button onClick={() => navigate('/inventory/devices')}>Update a Device</button>
       <button onClick={() => navigate('/inventory/delete')}>Delete a Device</button>
        
        {/*Issuing section */ }
        <button className="nav-button">Issuing</button>
        <button onClick={() => navigate('/issuing')}>All Issued Devices</button>
        <button onClick={() => navigate('/issuing/add')}>Add New Issuing</button>
        <button onClick={() => navigate('/issuing/status')}>Update Issuing Status</button>


      </div>
    </div>
  );
};

export default Dashboard;
