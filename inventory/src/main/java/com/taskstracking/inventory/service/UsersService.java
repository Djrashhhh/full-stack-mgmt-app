package com.taskstracking.inventory.service;



import java.util.List;

import com.taskstracking.inventory.domains.Users;

public interface UsersService {
    Users saveUser(Users user);
    Users getUserById(Long id);
    List<Users> getAllUsers();
    Users updateUser(Long id, Users user);
    boolean deleteUser(Long id);
  
	Users findByUsername(String username); 
	Users findByPassword(String username); 
	


	

    
}