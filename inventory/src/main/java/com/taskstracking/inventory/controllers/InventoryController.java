package com.taskstracking.inventory.controllers;

import com.taskstracking.inventory.domains.Inventory;
import com.taskstracking.inventory.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    // Add a device
    @PostMapping("/inventory")
    public ResponseEntity<Inventory> addDevice(@RequestBody Inventory inventory) {
        Inventory savedDevice = inventoryService.addDevice(inventory);
        return ResponseEntity.ok(savedDevice);
    }

    // Update a device
    @PutMapping("/inventory/{id}")
    public ResponseEntity<Inventory> updateDevice(@PathVariable Long id, @RequestBody Inventory inventory) {
        Inventory updatedDevice = inventoryService.updateDevice(id, inventory);
        return ResponseEntity.ok(updatedDevice);
    }

    // Delete a device
    @DeleteMapping("/inventory/{id}")
    public ResponseEntity<Void> deleteDevice(@PathVariable Long id) {
        inventoryService.deleteDevice(id);
        return ResponseEntity.noContent().build();
    }

    // Get all devices 
    @GetMapping("/inventory")
    public ResponseEntity<List<Inventory>> getAllDevices() {
        List<Inventory> devices = inventoryService.getAllDevices();
        return ResponseEntity.ok(devices);
    }
    
    @GetMapping("/inventory/{id}")
    public ResponseEntity<Inventory> getInventoryById(@PathVariable Long id) {
        Inventory inventory = inventoryService.getInventoryById(id);
        return inventory != null ? ResponseEntity.ok(inventory) : ResponseEntity.notFound().build();
    }
}
