package rnu.iset.dsi201.SPANV2.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
@Entity
@Inheritance(strategy= InheritanceType.TABLE_PER_CLASS)
public abstract class Person implements Serializable{
	private static final long serialVersionUID = 1L;

	private String email;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String nom;
	private String prenom;
	private String password;
	
	public Person(String email, String nom, String prenom, String password) {
		super();
		this.email = email;
		this.nom = nom;
		this.prenom = prenom;
		this.password = password;
	}
	public Person() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getEmail() {
		return email;
	}
	public int getId() {
		return id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Person [email=" + email + ", id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", password="
				+ password + "]";
	}
	
}
