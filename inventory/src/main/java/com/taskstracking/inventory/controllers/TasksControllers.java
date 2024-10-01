package com.taskstracking.inventory.controllers;

import com.taskstracking.inventory.domains.Roles;
import com.taskstracking.inventory.domains.Tasks;
import com.taskstracking.inventory.service.RolesService;
import com.taskstracking.inventory.service.TasksService;

import com.tasktracking.inventory.payload.TasksPayload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TasksControllers {

    @Autowired
    private TasksService tasksService;
    
    @Autowired
    private RolesService rolesService;

    @PostMapping("/tasks")
    public ResponseEntity<Tasks> createTask(@RequestBody Tasks task) {
        Tasks createdTask = tasksService.saveTask(task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<Tasks> getTaskById(@PathVariable Long id) {
        Tasks task = tasksService.getTaskById(id);
        return task != null ? new ResponseEntity<>(task, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/tasks")
    public ResponseEntity<List<TasksPayload>> getAllTasks() { 
        List<Tasks> tasks = tasksService.getAllTasks();
        List<TasksPayload> payload = new ArrayList<TasksPayload>();
        for (Tasks tasks2 : tasks) {
			TasksPayload p = new TasksPayload();
			p.setAssignedTo(rolesService.getRoleById(tasks2.getAssignedTo()).getRoleName());
			p.setCreatedBy(rolesService.getRoleById(tasks2.getCreatedBy()).getRoleName());
			Long updatedBy = tasks2.getUpdatedBy();
			if(updatedBy != null) {
				 p.setUpdatedBy(rolesService.getRoleById(tasks2.getUpdatedBy()).getRoleName());

			} else {
				p.setUpdatedBy("");
				
			}
			p.setCreatedAt(tasks2.getCreatedAt());
			p.setDescription(tasks2.getDescription());
			p.setPriorityLevel(tasks2.getPriorityLevel());
			p.setId(tasks2.getId());
			p.setStatus(tasks2.getStatus());
			p.setUpdatedAt(tasks2.getUpdatedAt());
			payload.add(p);
            	
		}
 
        return new ResponseEntity<>(payload, HttpStatus.OK);
    }

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Tasks> updateTask(@PathVariable Long id, @RequestBody Tasks task) {
        task.setId(id); // Ensure the ID is set
        Tasks updatedTask = tasksService.updateTask(id, task);
        return updatedTask != null ? new ResponseEntity<>(updatedTask, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        tasksService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/tasks/{id}/details")
    public ResponseEntity <Tasks> saveDescription (@PathVariable Long id, @RequestParam(required = false) String description, @RequestParam(required = false) String status, @RequestParam(required = true) Long roleId){
    	
    	Tasks task = tasksService.getTaskById(id);
    	if(description != null) {
    		task.setDescription(description);
    	}
    	
    	if(status != null) {
    		task.setStatus(status);
    	}
    	task.setUpdatedBy(roleId);
    	tasksService.saveTask(task);
    	return new ResponseEntity<>(task, HttpStatus.CREATED);
    	
    }
    
    
}
