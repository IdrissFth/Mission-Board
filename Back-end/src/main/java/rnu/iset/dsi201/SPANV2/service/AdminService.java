package rnu.iset.dsi201.SPANV2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rnu.iset.dsi201.SPANV2.entities.Admin;
import rnu.iset.dsi201.SPANV2.repositories.AdminRepository;
@Service
public class AdminService {

	
	@Autowired
	private AdminRepository AdminRepo;
	
	public List<Admin> getAllAdmins() 
	 {
		 return AdminRepo.findAll();
	}
	public Admin AddAdmin(Admin P)
	{
		return AdminRepo.save(P);
	}
	public void Delete(int id) {
		AdminRepo.deleteById(id);
	}
	public Optional<Admin> getID(int id) {
		return AdminRepo.findById(id);
	}
	
	public Admin Update(int id,Admin NewP){
		Optional<Admin> OptionalAdmin = AdminRepo.findById(id);
		if (OptionalAdmin.isPresent()) {
			Admin ExistingAdmin = OptionalAdmin.get();
			ExistingAdmin.setNom(NewP.getNom());
			ExistingAdmin.setPrenom(NewP.getPrenom());
			return AdminRepo.save(ExistingAdmin);
		}else {
			return null;
		}
	}
}

