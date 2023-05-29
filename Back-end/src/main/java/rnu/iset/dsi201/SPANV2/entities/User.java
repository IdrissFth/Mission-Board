package rnu.iset.dsi201.SPANV2.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User extends Person{
	private static final long serialVersionUID = 1L;
	
	@OneToMany(mappedBy = "user")
    private List<Mission> missionP;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String email, String nom, String prenom, String password) {
		super(email, nom, prenom,password);
		this.missionP= null;
		// TODO Auto-generated constructor stub
	}
	public List<Mission> getMissionP() {
        return missionP;
    }

    public void addMission(Mission mission) {
    	if (missionP == null) {
            missionP = new ArrayList<>();
        }
        missionP.add(mission);
        mission.setUser(this);
    }


    
	@Override
	public String toString() {
		return "User [getEmail()=" + getEmail() + ", getNom()=" + getNom() + ", getPrenom()=" + getPrenom()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}
}
