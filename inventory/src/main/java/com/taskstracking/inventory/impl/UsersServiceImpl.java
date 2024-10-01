package com.taskstracking.inventory.impl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.taskstracking.inventory.domains.Roles;
import com.taskstracking.inventory.domains.Users;
import com.taskstracking.inventory.repositories.UsersRepository;
import com.taskstracking.inventory.service.RolesService;
import com.taskstracking.inventory.service.UsersService;





@Service
@Transactional
public class UsersServiceImpl implements UsersService {
   private final UsersRepository usersRepository;
   private final RolesService rolesService;
 
   @Autowired
   public UsersServiceImpl(UsersRepository usersRepository, RolesService rolesService) {
       this.usersRepository = usersRepository;
       this.rolesService = rolesService;
   }
   @Override
   public Users saveUser(Users user) {
       if (user.getRole() != null && user.getRole().getRoleId() != null) {
           Roles role = rolesService.getRoleById(user.getRole().getRoleId());
           if (role != null) {
               user.setRole(role);
           } else {
               throw new IllegalArgumentException("Role not found");
           }
       }
       return usersRepository.save(user);
   }
   @Override
   public Users getUserById(Long id) {
       return usersRepository.findById(id).orElse(null);
   }
   @Override
   public List<Users> getAllUsers() {
       return usersRepository.findAll();
   }
   @Override
   public Users updateUser(Long id, Users user) {
       if (usersRepository.existsById(id)) {
           user.setUserId(id);  // Ensure the ID is set
           return usersRepository.save(user);
       }
       return null;
   }
   @Override
   public boolean deleteUser(Long id) {
       if (usersRepository.existsById(id)) {
           usersRepository.deleteById(id);
           return true;
       }
       return false;
   }
  
   @Override
   public Users findByUsername(String username) {
       return usersRepository.findByUsername(username);
   }
   @Override
   public Users findByPassword(String password) {
       return usersRepository.findByPassword(password);
   }
}

