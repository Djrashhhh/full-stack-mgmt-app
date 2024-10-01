package com.taskstracking.inventory.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.taskstracking.inventory.domains.Roles;
import com.taskstracking.inventory.repositories.RolesRepository;
import com.taskstracking.inventory.service.RolesService;




@Service("RolesServiceImpl")
@Component
@Transactional
public class RolesServiceImpl implements RolesService {
    
    private final RolesRepository rolesRepository;

    @Autowired
    public RolesServiceImpl(RolesRepository rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

    @Override
    public Roles saveRole(Roles role) {
        return rolesRepository.save(role);
    }

    @Override
    public Roles getRoleById(Long id) {
        return rolesRepository.findById(id).orElse(null);
    }

    @Override
    public List<Roles> getAllRoles() {
        return rolesRepository.findAll();
    }

	@Override
	public Roles updateRole(Long id, Roles role) {
		 if (rolesRepository.existsById(id)) {
	            role.setRoleId(id);  // Ensure the ID is set
	            return rolesRepository.save(role);
	        }
		return null;
	}

	@Override
	public boolean deleteRole(Long id) {
		 if (rolesRepository.existsById(id)) {
	            rolesRepository.deleteById(id);
	            return true;
	        }
		return false;
	}
}
