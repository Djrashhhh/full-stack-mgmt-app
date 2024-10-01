package com.taskstracking.inventory.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskstracking.inventory.domains.Inventory;
import com.taskstracking.inventory.domains.Tasks;
import com.taskstracking.inventory.repositories.InventoryRepository;
import com.taskstracking.inventory.service.InventoryService;




@Service
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    @Override
    public Inventory addDevice(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @Override
    public Inventory updateDevice(Long id, Inventory inventory) {
        Optional<Inventory> existingInventory = inventoryRepository.findById(id);
        if (existingInventory.isPresent()) {
            Inventory device = existingInventory.get();
            device.setUserId(inventory.getUserId());
            device.setDeviceName(inventory.getDeviceName());
            device.setSerialNumber(inventory.getSerialNumber());
            device.setDeviceType(inventory.getDeviceType());
            device.setManufacturer(inventory.getManufacturer());
            device.setUpdatedAt(inventory.getUpdatedAt());
            device.setDescription(inventory.getDescription());
            return inventoryRepository.save(device);
        }
        return null; // or throw an exception indicating the device wasn't found
    }

    @Override
    public void deleteDevice(Long id) {
        inventoryRepository.deleteById(id);
    }

    @Override
    public List<Inventory> getAllDevices() {
        return inventoryRepository.findAll();
    }
    
    @Override
    public Inventory getInventoryById(Long id) {
        return inventoryRepository.findById(id).orElse(null); // Find by ID
    }

}

