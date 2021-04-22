package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.model.Role;
import com.example.repository.RoleRepository;
@Service("roleService")
@Transactional
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public List<Role> getAllRole() {
		return roleRepository.findAll();
	}

	@Override
	public boolean checkIfIdExists(Integer id) {
		return roleRepository.existsById(id);	}

}
