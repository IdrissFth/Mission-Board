package rnu.iset.dsi201.SPANV2.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rnu.iset.dsi201.SPANV2.entities.Admin;
import rnu.iset.dsi201.SPANV2.service.AdminService;

@RestController
@RequestMapping("Admin")
public class AdminController {
	@Autowired
	private final AdminService service;

	public AdminController(AdminService AdminServ) {
		super();
		this.service = AdminServ;
	}

	@GetMapping()
	List<Admin> all() {
		return service.getAllAdmins();
	}
	@GetMapping("/{id}")
	public Optional<Admin> getAdmin(@PathVariable int id) {
		return service.getID(id);
	}
	@PostMapping()
	public Admin Add(@RequestBody Admin NewU) {
		return service.AddAdmin(NewU);
	}
	@DeleteMapping("/{id}")
	public void deleteAdmin(@PathVariable int id) {
		service.Delete(id);
	}
	@PutMapping("/{id}")
    public Optional<Admin> Upadate(@PathVariable int id,@RequestBody Admin NewU)
    {
        return service.getID(id).map(
                Admin->{
                    Admin.setNom(NewU.getNom());
                    Admin.setPrenom(NewU.getPrenom());
                    return service.Update(id,Admin)    ;
                    });
    }
}
