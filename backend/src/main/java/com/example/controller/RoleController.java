package com.example.controller;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Role;
import com.example.model.RoleDTO;
import com.example.service.RoleServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@RestController
@RequestMapping("/rest/api")
@Api(value = "Role Rest Controller: role utilisateur")
public class RoleController {

	@Autowired
	RoleServiceImpl roleService;
	
	//list role
	  @GetMapping("/allRole") 
	  @ApiOperation(value = "Afficher tous les rôles", response = List.class)
	  @ApiResponses(value = { @ApiResponse(code = 200, message = "La liste des rôles affiché avec succées"),})
//				@ApiResponse(code = 204, message = "Aucun rôle de congé touvé"), })
	public ResponseEntity<List<RoleDTO>> getAllRole(){		  
		List<Role> roles = roleService.getAllRole();
		if (!CollectionUtils.isEmpty(roles)) {
			roles.removeAll(Collections.singleton(null));
			List<RoleDTO> RoleDTOs = roles.stream().map(role -> {
				return mapRoleToRoleDTO(role);
			}).collect(Collectors.toList());
			return new ResponseEntity<List<RoleDTO>>(RoleDTOs, HttpStatus.OK);
		}
		
		return new ResponseEntity<List<RoleDTO>>(HttpStatus.NO_CONTENT);
}
	  private RoleDTO mapRoleToRoleDTO(Role role) {
			ModelMapper mapper = new ModelMapper();
			RoleDTO roleDTO = mapper.map(role, RoleDTO.class);
			return roleDTO;
		}
}
