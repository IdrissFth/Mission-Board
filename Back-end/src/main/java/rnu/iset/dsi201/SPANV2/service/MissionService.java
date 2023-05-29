package rnu.iset.dsi201.SPANV2.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rnu.iset.dsi201.SPANV2.entities.Mission;
import rnu.iset.dsi201.SPANV2.repositories.MissionRepository;


@Service
public class MissionService {
	@Autowired
	private MissionRepository MissionRepo;
	
	public List<Mission> getAllMissions() 
	{
		 return MissionRepo.findAll();
	}
	public Mission AddMission(Mission mission) {
		
		return MissionRepo.save(mission);
		}
	public void Delete(int id) {
		MissionRepo.deleteById(id);
	}
	public Optional<Mission> getID(int id){
		return MissionRepo.findById(id);
	}
	
	public Mission Update(int id,Mission NewM){
		Mission OptionalMission = MissionRepo.findById(id).orElse(null);
		if(OptionalMission != null) {
			OptionalMission.setDateMission(OptionalMission.getDateMission());
			OptionalMission.setDescription(NewM.getDescription());
			OptionalMission.setTitre(NewM.getTitre());
			OptionalMission.setPrix(NewM.getPrix());
			OptionalMission.setStatus(NewM.isStatus());
			return MissionRepo.save(OptionalMission);
		}else {
			return null;
		}
	}
}
