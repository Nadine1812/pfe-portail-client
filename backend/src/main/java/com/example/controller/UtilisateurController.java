package com.example.controller;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.modelmapper.ModelMapper;
import com.example.model.Utilisateur;
import com.example.model.UtilisateurDTO;
import com.example.repository.RoleRepository;
import com.example.service.UtilisateurService;
import com.example.service.UtilisateurServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("api/utilisateurs")
@Api(value = "Rest Controller: Utilisateur")
public class UtilisateurController {

	@Autowired
	private UtilisateurService utilisateurService;
	
	@Autowired
	private UtilisateurServiceImpl utilisateurServiceImpl;
	
	@Autowired
	RoleRepository roleRepository;
	
	@GetMapping("") 
	public List<Utilisateur> getAllUtilisateurs(){
		return utilisateurService.getAllUtilisateurs();
	}
	
	@PutMapping("/{id}")
	public  Utilisateur update(@PathVariable Integer id ,@RequestBody Utilisateur utilisateur) {
    	return  utilisateurService.update(utilisateur);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
    	utilisateurService.delete(id);
    }
    @PostMapping()
	public Utilisateur  add(@RequestBody Utilisateur utilisateur) {
    	return utilisateurService.add(utilisateur);
    }
    
    @GetMapping("/{id}")
	public Utilisateur  getUtilisateurById(@PathVariable  Integer id) {
		return utilisateurService.findById(id);
    }
	@PostMapping("/register")
	public Utilisateur signup(@RequestBody Utilisateur utilisateur){
		return utilisateurService.add(utilisateur);	
		}
	@PostMapping("/login")
	public Utilisateur login(@RequestBody Utilisateur utilisateur){
		return utilisateurService.findByUserNameAndPwd(utilisateur.getUserName(), utilisateur.getPwd());	
	}
	
	@PutMapping("/updateUser")
	@ApiOperation(value = "Modifier un utilisateur", response = UtilisateurDTO.class)
	@ApiResponses(value = { @ApiResponse(code = 404, message = "L'utilisateur n'existe pas"),
			@ApiResponse(code = 200, message = "L'utilisateur a été modifié"),
			@ApiResponse(code = 304, message = "Erreur lors de la modification de type de l'utilisateur") })
	public ResponseEntity<UtilisateurDTO> updateUser(@RequestBody UtilisateurDTO UtilisateurDTORequest) {
		if (!utilisateurService.checkIfCodeExists(UtilisateurDTORequest.getCode())) {
			return new ResponseEntity<UtilisateurDTO>(HttpStatus.NOT_FOUND);
		}
		Utilisateur utilisateurRequest = mapUtilisateurDTOToUtilisateur(UtilisateurDTORequest);
		Utilisateur utilisateurResponse = utilisateurService.updateUtilisateur(utilisateurRequest);
		if (utilisateurResponse != null) {
			UtilisateurDTO UtilisateurDTO = mapUtilisateurToUtilisateurDTO(utilisateurResponse);
			return new ResponseEntity<UtilisateurDTO>(UtilisateurDTO, HttpStatus.OK);
		}

		return new ResponseEntity<UtilisateurDTO>(HttpStatus.NOT_MODIFIED);
	}
	
	@GetMapping("/searchByCode/{code}")
	@ApiOperation(value = "Rechercher un utilisateur par son adresse mail", response = UtilisateurDTO.class)
	@ApiResponses(value = { @ApiResponse(code = 404, message = "L'utilisateur n'existe pas"),
			@ApiResponse(code = 200, message = "L'utilisateur a été modifié")})
	public ResponseEntity<UtilisateurDTO> searchUserByCode(@PathVariable String code) {
		Utilisateur utilisateur = utilisateurService.findUserByCode(code);
		if (utilisateur != null) {
			UtilisateurDTO utilisateurDTO = mapUtilisateurToUtilisateurDTO(utilisateur);
			return new ResponseEntity<UtilisateurDTO>(utilisateurDTO, HttpStatus.OK);
		}
		return new ResponseEntity<UtilisateurDTO>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/allUtilisateur")
	@ApiOperation(value = "Afficher tous les utilisateurs", response = List.class)
	@ApiResponses(value = { @ApiResponse(code = 200, message = "La liste des utilisateurs affiché avec succées"),
			@ApiResponse(code = 204, message = "Aucun utilisateur touvé"), })
	public ResponseEntity<List<UtilisateurDTO>> AllUser() {
		List<Utilisateur> utilisateur = utilisateurService.getAllUtilisateur();
		if (!CollectionUtils.isEmpty(utilisateur)) {
			utilisateur.removeAll(Collections.singleton(null));
			List<UtilisateurDTO> utilisateurDTOs = utilisateur.stream().map(e -> {
				return mapUtilisateurToUtilisateurDTO(e);
			}).collect(Collectors.toList());
			return new ResponseEntity<List<UtilisateurDTO>>(utilisateurDTOs, HttpStatus.OK);
		}
		return new ResponseEntity<List<UtilisateurDTO>>(HttpStatus.NO_CONTENT);
}
	
	@DeleteMapping("/deleteUtilisateur/{idUtilisateur}")
	@ApiOperation(value = "Supprimer un utilisateur s'il existe", response = String.class)
	@ApiResponse(code = 204, message = "L'utilisateur a été supprimé avec succées")
	public ResponseEntity<String> deleteUser(@PathVariable String codeUtilisateur) {
		utilisateurService.deleteUtilisateur(codeUtilisateur);
		return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
	}
	
	private UtilisateurDTO mapUtilisateurToUtilisateurDTO(Utilisateur utilisateur) {
		ModelMapper mapper = new ModelMapper();
		UtilisateurDTO utilisateurDTO = mapper.map(utilisateur, UtilisateurDTO.class);
		return utilisateurDTO;
	}

	private Utilisateur mapUtilisateurDTOToUtilisateur(UtilisateurDTO utilisateurDTORequest) {
		ModelMapper mapper = new ModelMapper();
		Utilisateur utilisateur = mapper.map(utilisateurDTORequest, Utilisateur.class);
		return utilisateur;
	}

}


