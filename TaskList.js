import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import { fetchTasks } from '../api'; // Ensure the path is correct
import './TaskList.css'; // Import the CSS file


const TaskList = () => {
   const [tasks, setTasks] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');
   const [updatedTask, setUpdatedTask] = useState({}); // Initialize as an empty object


   useEffect(() => {
       const loadTasks = async () => {
           try {
               const response = await fetchTasks(); // Fetch tasks from API
               const sortedTasks = response.data.sort((a, b) => a.id - b.id);
                
                setTasks(sortedTasks);
               //setTasks(response.data);
           } catch (error) {
               setError('Failed to fetch tasks');
           } finally {
               setLoading(false);
           }
       };


       loadTasks();
   }, []);


   const handleStatusChange = (taskId, newStatus) => {
       setUpdatedTask(prev => ({
           ...prev,
           [taskId]: { ...prev[taskId], status: newStatus }
       }));
   };

   const handleDescriptionChange = (taskId, newDescription) => {
       setUpdatedTask(prev => ({
           ...prev,
           [taskId]: { ...prev[taskId], description: newDescription }
       }));
   };

   const handleUpdatedByChange = (taskId, newUpdatedBy) => {
    setUpdatedTask(prev => ({
        ...prev,
        [taskId]: { ...prev[taskId], updatedBy: newUpdatedBy }
    }));
};


   const handleSaveChanges = async () => {
       if (Object.keys(updatedTask).length > 0) {
        var isDescription = false;
        var isStatus = false;
           try {
            console.log("Hello there")
            Object.keys(updatedTask).forEach(async (id) => {
                if(updatedTask[id].description != null) {
                    isDescription = true
                } 
                else {
                    isStatus = true
                }

                if(isDescription && isStatus) {
                    await axios.put(`http://localhost:8080/api/tasks/${id}/details?description=${updatedTask[id].description}&status=${updatedTask[id].status}&roleId=${JSON.parse(localStorage.getItem('TOKEN')).role.roleId}`);
                }
                else if (isDescription) {
                    await axios.put(`http://localhost:8080/api/tasks/${id}/details?description=${updatedTask[id].description}&roleId=${JSON.parse(localStorage.getItem('TOKEN')).role.roleId}`)
                }

                else if(isStatus){
                    await axios.put(`http://localhost:8080/api/tasks/${id}/details?status=${updatedTask[id].status}&roleId=${JSON.parse(localStorage.getItem('TOKEN')).role.roleId}`)
                };
            });
            console.log("hello")
               const response = await fetchTasks();
               setTasks(response.data);
               setUpdatedTask({});
           } catch (error) {
            console.log(error, "=====")
               setError('Failed to save changes');
           }
       }
   };


   if (loading) return <p>Loading...</p>;
   if (error) return <p>{error}</p>;


   return (
       <div className="tasklist-container">
           <h2>All Tasks</h2>
           <table>
               <thead>
                   <tr>
                       <th>Task ID</th>
                       <th>Description</th>
                       <th>Created By</th>
                       <th>Created At</th>
                       <th>Assigned To</th>
                       <th>Status</th>
                       <th>Priority Level</th>
                       <th>Updated By</th>
                       <th>Updated At</th>
                      
                   </tr>
               </thead>
               <tbody>
                   {tasks.map(task => (
                       <tr key={task.id}>
                           <td>{task.id}</td>
                           <td>
                               <input
                                   type="text"
                                   value={updatedTask?.[task.id]?.description || task.description}
                                   onChange={(e) => handleDescriptionChange(task.id, e.target.value)}
                               />
                           </td>
                           <td>{task.createdBy}</td>
                           <td>{task.createdAt}</td>
                           <td>{task.assignedTo}</td>
                           <td>
                               <select
                                   value={updatedTask?.[task.id]?.status || task.status}
                                   onChange={(e) => handleStatusChange(task.id, e.target.value)}
                               >
                                   <option value="pending">Pending</option>
                                   <option value="in progress">In Progress</option>
                                   <option value="completed">Completed</option>
                               </select>
                           </td>
                           <td>{task.priorityLevel}</td>
                           <td>{task.updatedBy}</td>
                           {/* <td>
                                <input
                                    type="text"
                                    value={updatedTask?.[task.id]?.updatedBy || task.updatedBy || ''}
                                    onChange={(e) => handleUpdatedByChange(task.id, e.target.value)}
                                />
                            </td> */}
                            <td>{task.updatedAt}</td>
                       </tr>
                   ))}
               </tbody>
           </table>
           <button onClick={handleSaveChanges} className="save-changes-button">Complete</button>
       </div>
   );
};


export default TaskList;
