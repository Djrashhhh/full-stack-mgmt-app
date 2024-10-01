package com.taskstracking.inventory.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taskstracking.inventory.domains.Roles;


@Repository
public interface RolesRepository extends JpaRepository <com.taskstracking.inventory.domains.Roles, Long>{

	@SuppressWarnings("unchecked")
	Roles save(Roles role);


}
