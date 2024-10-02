import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

//functions for the users entity

export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
export const loginUser = (user) => axios.post(`${API_URL}/login`, user);
//function for updatedBy
export const fetchUsers = () => axios.get(`${API_URL}/users`); 

//functions for tasks entities
export const fetchTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = () => axios.get(`${API_URL}/tasks`);
export const updateTask = (taskId, updatedTask) => axios.put(`${API_URL}/tasks/${taskId}`, updatedTask);

//functions for getting all devices, updating a device and deleting a device
export const fetchDevices = async () => {
    try {
        const response = await axios.get(`${API_URL}/inventory`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch devices');
    }
};
export const addDevice = async (deviceData) => {
    try {
        const response = await axios.post(`${API_URL}/inventory`, deviceData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to add device');
    }
};

export const updateDevice = async (deviceId, updatedDevice) => {
    try {
        const response = await axios.put(`${API_URL}/inventory/${deviceId}`, updatedDevice);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update device');
    }
};

export const deleteDevice = async (deviceId) => {
    try {
        await axios.delete(`${API_URL}/inventory/${deviceId}`);
    } catch (error) {
        throw new Error('Failed to delete device');
    }
};

//functions for issuing a device, fetching all issued devices and updating the status of an issuing
export const fetchIssuedDevices= async () => {
    try {
        const response = await axios.get(`${API_URL}/issuing`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch devices');
    }
};
export const createIssuing = async (issuingData) => {
    try {
        const response = await axios.post(`${API_URL}/issuing`, issuingData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create issuing');
    }
};
export const updateIssuingStatus = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/issuing/${id}/status`, { status });
        return response.data;
    } catch (error) {
        throw new Error('Failed to update issuing status');
    }
};
