import React, { useState } from 'react';
import axios from 'axios';
import './AddDevice.css'; // Import the CSS file

const AddDevice = () => {
    const [deviceData, setDeviceData] = useState({
        user_id: '',
        device_name: '',
        serial_number: '',
        device_type: '',
        manufacturer: '',
        description: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeviceData({
            ...deviceData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/inventory', deviceData);
            setSuccess('Device added successfully!');
            setError('');
            // Clear the form fields after successful submission
            setDeviceData({
                user_id: '',
                device_name: '',
                serial_number: '',
                device_type: '',
                manufacturer: '',
                description: ''
            });
        } catch (error) {
            setError('Failed to add device');
            setSuccess('');
        }
    };

    return (
        <div className="add-device-container">
            <h2>Add New Device</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="role_id">Role ID: </label>
                    <input
                        type="number"
                        id="role_id"
                        name="role_id"
                        value={4}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="device_name">Device Name:</label>
                    <input
                        type="text"
                        id="device_name"
                        name="device_name"
                        value={deviceData.device_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="serial_number">Serial Number:</label>
                    <input
                        type="text"
                        id="serial_number"
                        name="serial_number"
                        value={deviceData.serial_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="device_type">Device Type:</label>
                    <input
                        type="text"
                        id="device_type"
                        name="device_type"
                        value={deviceData.device_type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="manufacturer">Manufacturer:</label>
                    <input
                        type="text"
                        id="manufacturer"
                        name="manufacturer"
                        value={deviceData.manufacturer}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={deviceData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Add Device</button>
            </form>
        </div>
    );
};

export default AddDevice;
