package com.taskstracking.inventory.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.taskstracking.inventory.domains.Tasks;
import com.taskstracking.inventory.repositories.TasksRepository;
import com.taskstracking.inventory.service.TasksService;



@Service("TasksServiceImpl")
@Component
@Transactional
public class TasksServiceImpl implements TasksService {
    
    private final TasksRepository taskRepository;

    @Autowired
    public TasksServiceImpl(TasksRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Tasks saveTask(Tasks task) {
        return taskRepository.save(task);
    }

    @Override
    public Tasks getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    @Override
    public List<Tasks> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    @Override
    public Tasks updateTask(Long id, Tasks task) {
        Optional<Tasks> existingTask = taskRepository.findById(task.getId());
        if (existingTask.isPresent()) {
            Tasks updatedTask = existingTask.get();
            updatedTask.setDescription(task.getDescription());
            updatedTask.setStatus(task.getStatus());
            updatedTask.setUpdatedAt(task.getUpdatedAt());
            updatedTask.setUpdatedBy(task.getUpdatedBy());
            return taskRepository.save(updatedTask);
        } else {
            throw new RuntimeException("Task not found");
        }
    }
}

	