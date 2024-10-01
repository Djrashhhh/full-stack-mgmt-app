import React, { useState } from 'react';
import axios from 'axios';
import './CreateTask.css'; // Optional: Style the form

const CreateTask = () => {
    // Initialize state for each field
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [assigned_to, setAssignedTo] = useState('');
    //const [created_by, setCreatedBy] = useState('');
 
    const [priority_level, setPriorityLevel] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a new task object matching your database schema
        const newTask = {
            description,
            status,
            assigned_to: parseInt(assigned_to), // Integer type
            created_by: JSON.parse(localStorage.getItem('TOKEN')).role.roleId,   // Integer type
            
            priority_level,
        };

        try {
            // Make the POST request to create the task
            await axios.post('http://localhost:8080/api/tasks', newTask);
            setSuccess('Task created successfully!');
            setError('');
            // Clear the form fields after successful submission
            setDescription('');
            setStatus('');
            setAssignedTo('');
            //setCreatedBy('');
          
            setPriorityLevel('');
        } catch (error) {
            setError('Failed to create task');
            setSuccess('');
        }
    };

    return (
        <div className="create-task-container">
            <h2>Create a New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="" disabled>Select status</option>
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="assignedTo">Assigned To (Role ID):</label>
                    <input
                        type="number"
                        id="assignedTo"
                        value={assigned_to}
                        onChange={(e) => setAssignedTo(e.target.value)}
                    />
                </div>
                
                {/* <div className="form-group">
                    <label htmlFor="createdBy">Created By (User ID):</label>
                    <input
                        type="number"
                        id="createdBy"
                        value={created_by}
                        onChange={(e) => setCreatedBy(e.target.value)}
                    />
                </div> */}
               
                <div className="form-group">
                    <label htmlFor="priorityLevel">Priority Level:</label>
                    <select
                        id="priorityLevel"
                        value={priority_level}
                        onChange={(e) => setPriorityLevel(e.target.value)}
                    >
                        <option value="" disabled>Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit">Create Task</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
};

export default CreateTask;
