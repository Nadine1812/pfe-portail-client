package com.example.service;

import java.util.List;

import com.example.model.Role;


public interface RoleService {
	
	public List<Role> getAllRole();
	
	public boolean checkIfIdExists(Integer id);
}
