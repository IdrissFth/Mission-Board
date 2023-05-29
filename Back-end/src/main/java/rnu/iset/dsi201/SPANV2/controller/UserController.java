package rnu.iset.dsi201.SPANV2.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rnu.iset.dsi201.SPANV2.entities.User;
import rnu.iset.dsi201.SPANV2.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("User")
public class UserController {
	@Autowired
	private final UserService service;

	public UserController(UserService UserServ) {
		super();
		this.service = UserServ;
	}

	@GetMapping()
	List<User> all() {
		return service.getAllUsers();
	}
	
	@GetMapping("/{id}")
	public User getUser(@PathVariable int id) {
		return service.getID(id);
	}
	@PostMapping()
	public User Add(@RequestBody User NewU) {
		return service.AddUser(NewU);
	}
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable int id) {
		service.Delete(id);
	}

	@PutMapping("/{id}")
    public Optional<User> Upadate(@PathVariable int id,@RequestBody User NewU)
    {
        return service.getOID(id).map(
                User->{
                    User.setNom(NewU.getNom());
                    User.setPrenom(NewU.getPrenom());
                    User.setPassword(NewU.getPassword());
                    
                    return service.Update(id,User)    ;
                    });
    }
}