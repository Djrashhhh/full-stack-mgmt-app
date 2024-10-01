import React, { useEffect, useState } from 'react';
import { fetchIssuedDevices } from '../api';
import './IssuedDevList.css'; // Import the CSS file

const IssuedDevList = () => {
    const [issuedDevices, setIssuedDevices] = useState([]);

    useEffect(() => {
        const getIssuedDevices = async () => {
            try {
                const devices = await fetchIssuedDevices();
               // Sort devices by ID
               const sortedDevices = devices.sort((a, b) => a.id - b.id);
               setIssuedDevices(sortedDevices);
            } catch (error) {
                console.error('Failed to fetch issued devices:', error);
            }
        };

        getIssuedDevices();
    }, []);

    return (
        <div className="issued-dev-list-container">
            <h2>Issued Devices List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                     
                        <th>Device Name</th>
                        <th>Serial Number</th>
                        <th>Device Type</th>
                        <th>Client Name</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {issuedDevices.map((device) => (
                        <tr key={device.id}>
                            <td>{device.id}</td>
                            
                            <td>{device.device_name}</td>
                            <td>{device.serial_number}</td>
                            <td>{device.device_type}</td>
                            <td>{device.client_name}</td>
                            <td>{device.created_at}</td>
                            <td>{device.updated_at}</td>
                            <td>{device.description}</td>
                            <td>{device.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IssuedDevList;
