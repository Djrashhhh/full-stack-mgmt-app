import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchDevices } from '../api'; // Ensure the path is correct
import './DeleteDevice.css';



const DeleteDevice = () => {
    const [devices, setDevices] = useState([]);
    const [selectedDeviceId, setSelectedDeviceId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const loadDevices = async () => {
            try {
                const fetchedDevices = await fetchDevices();
                setDevices(fetchedDevices);
            } catch (error) {
                setError('Failed to fetch devices');
            } finally {
                setLoading(false);
            }
        };

        loadDevices();
    }, []);

    const handleDelete = async () => {
        if (selectedDeviceId) {
            try {
                await axios.delete(`http://localhost:8080/api/inventory/${selectedDeviceId}`);
                setSuccess('Device deleted successfully');
                setSelectedDeviceId(null);
                // Refresh the device list
                const fetchedDevices = await fetchDevices();
                setDevices(fetchedDevices);
            } catch (error) {
                setError('Failed to delete device');
            }
        } else {
            setError('Please select a device to delete');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="delete-device-container">
            <h2>Delete Device</h2>
            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Device ID</th>
                        <th>Device Name</th>
                        <th>Device Type</th>
                        <th>Serial Number</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device => (
                        <tr key={device.device_id}>
                            <td>
                                <input
                                    type="radio"
                                    name="device"
                                    value={device.device_id}
                                    checked={selectedDeviceId === device.device_id}
                                    onChange={() => setSelectedDeviceId(device.device_id)}
                                />
                            </td>
                            <td>{device.device_id}</td>
                            <td>{device.device_name}</td>
                            <td>{device.device_type}</td>
                            <td>{device.serial_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleDelete} className="delete-button">Delete Device</button>
        </div>
    );
};

export default DeleteDevice;
