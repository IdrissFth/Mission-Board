package rnu.iset.dsi201.SPANV2.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "Mission")
public class Mission {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int code;
	private String titre;
	private String description;
	@Temporal(TemporalType.DATE)
	private LocalDate dateMission;
	private int prix;
	private boolean status;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_id")
    private User user;
	
	public Mission(String titre, String description, int prix) {
		super();
		this.titre = titre;
		this.description = description;
		this.dateMission = LocalDate.now();
		this.prix = prix;
		this.status = false; 
	}
	public Mission() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDate getDateMission() {
		return dateMission;
	}
	public void setDateMission(LocalDate dateMission) {
		this.dateMission = dateMission;
	}
	public int getPrix() {
		return prix;
	}
	public void setPrix(int prix) {
		this.prix = prix;
	}

	@Override
	public String toString() {
		return "Mission [code=" + code + ", titre=" + titre + ", description=" + description + ", dateMission="
				+ dateMission + ", prix=" + prix + ", status=" + status + ", user=" + user + "]";
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
}
