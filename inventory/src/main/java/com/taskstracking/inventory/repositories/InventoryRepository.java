package com.taskstracking.inventory.repositories;

import com.taskstracking.inventory.domains.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    // You can add custom query methods here if needed
}
