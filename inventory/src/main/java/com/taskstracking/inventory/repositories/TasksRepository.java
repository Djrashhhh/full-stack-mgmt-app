package com.taskstracking.inventory.repositories;

import com.taskstracking.inventory.domains.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TasksRepository extends JpaRepository<Tasks, Long> {
    // Custom query methods can be added here if needed
}
