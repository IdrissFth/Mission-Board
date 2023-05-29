package rnu.iset.dsi201.SPANV2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rnu.iset.dsi201.SPANV2.entities.Mission;
import rnu.iset.dsi201.SPANV2.entities.User;
import rnu.iset.dsi201.SPANV2.repositories.UserRepository;
@Service
public class UserService {

	@Autowired
	private UserRepository UserRepo;
	
	public List<User> getAllUsers() 
	{
		 return UserRepo.findAll();
	}
	public User AddUser(User P)
	{
		return UserRepo.save(P);
	}
	public void Delete(int id) {
		UserRepo.deleteById(id);
	}
	public User getID(int Id) {
		return UserRepo.findById(Id).orElse(null);
	}
	public Optional<User> getOID(int Id) {
		return UserRepo.findById(Id);
	}
	
	public User Missionadd(int Id,Mission mission) {
		User optionalU = UserRepo.findById(Id).orElse(null);
		optionalU.addMission(mission);
		return UserRepo.save(optionalU);
	}
	
	public User Update(int id,User NewP){
		User OptionalUser = UserRepo.findById(id).orElse(null);
		if (OptionalUser != null) {
			OptionalUser.setNom(NewP.getNom());
			OptionalUser.setPrenom(NewP.getPrenom());
			OptionalUser.setPassword(NewP.getPassword());
			return UserRepo.save(OptionalUser);
		}else {
			return null;
		}
	}
}
