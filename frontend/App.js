// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout'; // Import Layout component

import Dashboard from './components/Dashboard';

import './App.css';
import TaskList from './components/TaskList'; // Import TaskList component
import CreateTask from './components/CreateTask';
import InventoryList from './components/InventoryList';
import AddDevice from './components/AddDevice';
import UpdateDevice from './components/UpdateDevice';
import DeleteDevice from './components/DeleteDevice';
import IssuedDevList from './components/IssuedDevList';
import AddIssuing from './components/AddIssuing';
import UpdateIssuingStatus from './components/UpdateIssuingStatus';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<Layout />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
  
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/inventory/devices" element={<InventoryList />} />
          <Route path="/inventory/add" element={<AddDevice />} />
                <Route path="/inventory/update" element={<UpdateDevice />} />
                <Route path="/inventory/delete" element={<DeleteDevice />} />
       
                <Route path="/issuing" element={<IssuedDevList />} />
                <Route path="/issuing/add" element={<AddIssuing />} />
                <Route path="/issuing/status" element={<UpdateIssuingStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
