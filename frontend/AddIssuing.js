import React, { useState } from 'react';
import axios from 'axios';
import './AddIssuing.css'; // Import the CSS file

const API_URL = 'http://localhost:8080/api';

const AddIssuing = () => {
    // Initialize state for each field
    const [user_id, setUserId] = useState('');
    const [device_name, setDeviceName] = useState('');
    const [serial_number, setSerialNumber] = useState('');
    const [device_type, setDeviceType] = useState('');
    const [client_name, setClientName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('issued');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a new issuing object matching your database schema
        const newIssuing = {
            user_id: parseInt(user_id),
            device_name,
            serial_number,
            device_type,
            client_name,
            description,
            status,
        };

        try {
            // Make the POST request to create the issuing
            await axios.post(`${API_URL}/issuing`, newIssuing);
            setSuccess('Issuing created successfully!');
            setError('');
            // Clear the form fields after successful submission
            setUserId('');
            setDeviceName('');
            setSerialNumber('');
            setDeviceType('');
            setClientName('');
            setDescription('');
            setStatus('issued');
        } catch (error) {
            setError('Failed to create issuing');
            setSuccess('');
        }
    };

    return (
        <div className="add-issuing-container">
            <h2>Create New Issuing</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="user_id">Role ID:</label>
                    <input
                        type="number"
                        id="user_id"
                        value={user_id}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="device_name">Device Name:</label>
                    <input
                        type="text"
                        id="device_name"
                        value={device_name}
                        onChange={(e) => setDeviceName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="serial_number">Serial Number:</label>
                    <input
                        type="text"
                        id="serial_number"
                        value={serial_number}
                        onChange={(e) => setSerialNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="device_type">Device Type:</label>
                    <input
                        type="text"
                        id="device_type"
                        value={device_type}
                        onChange={(e) => setDeviceType(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="client_name">Client Name:</label>
                    <input
                        type="text"
                        id="client_name"
                        value={client_name}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                    />
                </div>
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
                    <input
                        type="text"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Issuing</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
};

export default AddIssuing;
