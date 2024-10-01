package com.taskstracking.inventory.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskstracking.inventory.domains.Users;
import com.taskstracking.inventory.dto.LoginRequest;
import com.taskstracking.inventory.service.UsersService;

@RestController
@RequestMapping("/api")
public class LoginController {
	
	@Autowired
    private UsersService usersService;
	
	  @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
	        Users user = usersService.findByUsername(loginRequest.getUsername());
	        
	        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
	            // You can generate a JWT token here or return a success message
	            return new ResponseEntity<>(user, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
	        }
	    }

}
