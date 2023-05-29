package rnu.iset.dsi201.SPANV2.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "Admin")
public class Admin extends Person{
	private static final long serialVersionUID = 1L;
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String email, String nom, String prenom, String password) {
		super(email, nom, prenom,password);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Admin [getEmail()=" + getEmail() + ", getNom()=" + getNom() + ", getPrenom()=" + getPrenom()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}	
}
