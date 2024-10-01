package com.taskstracking.inventory.domains;

import java.io.Serializable;
import java.util.Objects;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@SuppressWarnings("serial")
@Table(name = "Roles")
public class Roles implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roleId;

    private String roleName;

    // Default constructor
    public Roles() {
    }

    // Constructor for initializing data
    public Roles(Long roleId, String roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }

    // Getters and setters
    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Roles roles = (Roles) o;
        return Objects.equals(roleId, roles.roleId) &&
               Objects.equals(roleName, roles.roleName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(roleId, roleName);
    }

    @Override
    public String toString() {
        return "Roles{" +
               "roleId=" + roleId +
               ", roleName='" + roleName + '\'' +
               '}';
    }

	public Long getId() {
		// TODO Auto-generated method stub
		return null;
	}
}

