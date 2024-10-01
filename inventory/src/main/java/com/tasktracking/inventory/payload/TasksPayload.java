package com.tasktracking.inventory.payload;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;



public class TasksPayload {
	
	    private Long id;

	    private String description;

	    private String status;

	    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	    private LocalDateTime createdAt;

	  
	    private String createdBy;

	    
	    private String assignedTo;

	    
	    private String updatedBy;

	    
	    private String priorityLevel;

	    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	    private LocalDateTime updatedAt;

	
	    // Getters and setters

	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getDescription() {
	        return description;
	    }

	    public void setDescription(String description) {
	        this.description = description;
	    }

	    public String getStatus() {
	        return status;
	    }

	    public void setStatus(String status) {
	        this.status = status;
	    }

	    public LocalDateTime getCreatedAt() {
	        return createdAt;
	    }

	    public void setCreatedAt(LocalDateTime createdAt) {
	        this.createdAt = createdAt;
	    }

	    public String getCreatedBy() {
	        return createdBy;
	    }

	    public void setCreatedBy(String createdBy) {
	        this.createdBy = createdBy;
	    }

	    public String getAssignedTo() {
	        return assignedTo;
	    }

	    public void setAssignedTo(String assignedTo) {
	        this.assignedTo = assignedTo;
	    }

	    public String getUpdatedBy() {
	        return updatedBy;
	    }

	    public void setUpdatedBy(String updatedBy) {
	        this.updatedBy = updatedBy;
	    }

	    public String getPriorityLevel() {
	        return priorityLevel;
	    }

	    public void setPriorityLevel(String priorityLevel) {
	        this.priorityLevel = priorityLevel;
	    }

	    public LocalDateTime getUpdatedAt() {
	        return updatedAt;
	    }

	    public void setUpdatedAt(LocalDateTime updatedAt) {
	        this.updatedAt = updatedAt;
	    }

	    @Override
	    public String toString() {
	        return "Tasks [id=" + id + ", description=" + description + ", status=" + status 
	               + ", createdAt=" + createdAt + ", createdBy=" + createdBy 
	               + ", assignedTo=" + assignedTo + ", updatedBy=" + updatedBy 
	               + ", priorityLevel=" + priorityLevel + ", updatedAt=" + updatedAt + "]";
	    }
	}


