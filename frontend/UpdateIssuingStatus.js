import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UpdateIssuingStatus.css'; // Import the CSS file

const API_URL = 'http://localhost:8080/api';

const UpdateIssuingStatus = () => {
    const [issuedDevices, setIssuedDevices] = useState([]);
    const [updatedStatus, setUpdatedStatus] = useState({});

    useEffect(() => {
        const fetchIssuedDevices = async () => {
            try {
                const response = await axios.get(`${API_URL}/issuing`);
                setIssuedDevices(response.data);
            } catch (error) {
                console.error('Failed to fetch issued devices:', error);
            }
        };

        fetchIssuedDevices();
    }, []);

    const handleStatusChange = (id, newStatus) => {
        setUpdatedStatus(prevState => ({
            ...prevState,
            [id]: newStatus
        }));
    };

  

    const handleSubmit = async () => {
        try {
            for (const [id, status] of Object.entries(updatedStatus)) {
                await axios.put(`${API_URL}/issuing/${id}/status`, { status });
            }
            alert('Issuing statuses updated successfully!');
        } catch (error) {
            console.error('Failed to update issuing statuses:', error);
            alert('Failed to update issuing statuses.');
        }
    };

    return (
        <div className="update-issuing-status-container">
            <h2>Update Issuing Status</h2>
            {issuedDevices.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Device Name</th>
                            <th>Device Type</th>
                            <th>Serial Number</th>
                            <th>Client Name</th>
                            <th>Status</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {issuedDevices.map(device => (
                            <tr key={device.id}>
                                <td>{device.device_name}</td>
                                <td>{device.device_type}</td>
                                <td>{device.serial_number}</td>
                                <td>{device.client_name}</td>
                                <td>
                                    <select
                                        value={updatedStatus[device.id] || device.status}
                                        onChange={(e) => handleStatusChange(device.id, e.target.value)}
                                    >
                                        <option value="issued">Issued</option>
                                        <option value="returned">Returned</option>
                                    </select>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No issued devices found.</p>
            )}
            <button onClick={handleSubmit}>Complete</button>
        </div>
    );
};

export default UpdateIssuingStatus;
