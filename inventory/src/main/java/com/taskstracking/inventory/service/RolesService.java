package com.taskstracking.inventory.service;

import java.util.List;
import com.taskstracking.inventory.domains.Roles;

public interface RolesService {
    
    Roles saveRole(Roles role);
    
    Roles getRoleById(Long id);
    
    List<Roles> getAllRoles();

	Roles updateRole(Long id, Roles role);

	boolean deleteRole(Long id);

}