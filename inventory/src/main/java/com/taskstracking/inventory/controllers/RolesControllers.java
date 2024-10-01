package com.taskstracking.inventory.controllers;

import com.taskstracking.inventory.domains.Roles;
import com.taskstracking.inventory.service.RolesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RolesControllers {
 
	
    @Autowired
    private RolesService rolesService;
	
	@PostMapping ("/roles")
    public ResponseEntity<Roles> saveRole(@RequestBody Roles role) {
        Roles savedRole = rolesService.saveRole(role);
        return new ResponseEntity<>(savedRole, HttpStatus.CREATED);
    }

	
	 @GetMapping("/roles/{id}")
	    public ResponseEntity<Roles> getRoleById(@PathVariable Long id) {
	        Roles role = rolesService.getRoleById(id);
	        if (role != null) {
	            return new ResponseEntity<>(role, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	 
	 @GetMapping ("/roles")
	    public ResponseEntity<List<Roles>> getAllRoles() {
	        List<Roles> roles = rolesService.getAllRoles();
	        return new ResponseEntity<>(roles, HttpStatus.OK);
	    }
	 

	    @PutMapping("/roles/{id}")
	    public ResponseEntity<Roles> updateRole(@PathVariable Long id, @RequestBody Roles roleDetails) {
	        Roles updatedRole = rolesService.updateRole(id, roleDetails);
	        if (updatedRole != null) {
	            return new ResponseEntity<>(updatedRole, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @DeleteMapping("/roles/{id}")
	    public ResponseEntity<Void> deleteRole(@PathVariable Long id) {
	        boolean isDeleted = rolesService.deleteRole(id);
	        if (isDeleted) {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	
}
