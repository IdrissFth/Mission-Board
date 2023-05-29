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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rnu.iset.dsi201.SPANV2.entities.Mission;
import rnu.iset.dsi201.SPANV2.entities.User;
import rnu.iset.dsi201.SPANV2.service.MissionService;
import rnu.iset.dsi201.SPANV2.service.UserService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("Mission")
public class MissionController {
	
	@Autowired
	private final MissionService service;
	@Autowired
    private final UserService Userv;
    
	public MissionController(MissionService service, UserService Userv) {
        this.service = service;
        this.Userv = Userv;
    }

	@GetMapping()
	List<Mission> all() {
		return service.getAllMissions();
	}
	
	@GetMapping("/{id}")
	public Optional<Mission> getMission(@PathVariable int id) {
		return service.getID(id);
	}
	@PostMapping()
	public void addMission(@RequestBody Mission mission,@RequestParam("id") int userId) {
		Mission Cmission = new Mission(mission.getTitre(),mission.getDescription(),mission.getPrix());
		User user = Userv.getID(userId);
		Cmission.setUser(Userv.getID(userId));
		Userv.Missionadd(userId, Cmission);
		service.AddMission(Cmission);
		Userv.Update(userId, user);
	}
	@DeleteMapping("/{id}")
	public void deleteMission(@PathVariable int id) {
		service.Delete(id);
	}

	@PutMapping("/{id}")
    public Optional<Mission> Upadate(@PathVariable int id,@RequestBody Mission NewM)
    {
        return service.getID(id).map(
                Mission->{
                    Mission.setTitre(NewM.getTitre());
                    Mission.setDescription(NewM.getDescription());
                    Mission.setPrix(NewM.getPrix());
                    Mission.setStatus(NewM.isStatus());
                    return service.Update(id,Mission);
                    });
    }
}
