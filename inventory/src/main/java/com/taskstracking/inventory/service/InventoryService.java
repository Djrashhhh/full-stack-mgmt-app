package com.taskstracking.inventory.service;

import java.util.List;

import com.taskstracking.inventory.domains.Inventory;


public interface InventoryService {
    
    Inventory addDevice(Inventory inventory);
    
    Inventory updateDevice(Long id, Inventory inventory);
    
    void deleteDevice(Long id);
    
    List<Inventory> getAllDevices();
    
    Inventory getInventoryById(Long id); // Add this method
   
}
