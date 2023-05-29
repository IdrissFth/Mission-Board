package rnu.iset.dsi201.SPANV2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import rnu.iset.dsi201.SPANV2.entities.User;
import rnu.iset.dsi201.SPANV2.entities.Admin;
import rnu.iset.dsi201.SPANV2.entities.Mission;
import rnu.iset.dsi201.SPANV2.service.UserService;
import rnu.iset.dsi201.SPANV2.service.AdminService;
import rnu.iset.dsi201.SPANV2.service.MissionService;

@SpringBootApplication
public class SpanV2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpanV2Application.class, args);
	}
	@Bean
	@Autowired
	public CommandLineRunner demo(UserService US,MissionService MS,AdminService AS) {
		return args -> {
		Admin A1 = new Admin("Admin@gmail.com","Admin","Admin","admin");
		AS.AddAdmin(A1);
		User P1 = new User("idriss.fathallah02@gmail.com","idriss", "fathallah","bananes5");
		User P2 = new User("jihene.sami14@gmail.com","jihene","Ben ammar","jonjon");
		US.AddUser(P1);
		US.AddUser(P2);
		System.out.println(US.getID(2));
			//Test Mission!!
		Mission M1 = new Mission("Creation Logo","Petite logo de taille X*X",20);
		Mission M2 = new Mission("Slogant Creative","Slogant creative pour entreprise de parfume",50);
		MS.AddMission(M1);
		MS.AddMission(M2);
		System.out.println(MS.getID(1));
		System.out.println(MS.getID(2));
		Mission M3 = new Mission("Site web","Un site web statique pour e-commerce",120);
		MS.Update(2, M3);
		
	};
	}
}
