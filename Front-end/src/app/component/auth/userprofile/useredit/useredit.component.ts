import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/component/models/user';
import { UserServiceService } from 'src/app/component/services/user-service.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  UpdateUser!: FormGroup;
  user!: User;
  
  constructor(
    private formBuilder:FormBuilder,
    private userService: UserServiceService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.getUser();
    if(this.user == null){
      this.router.navigate(['/login'])
    }
    this.createUpdateForm()
  }
  
  getUser(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      console.log('User:', this.user);
      // You can access user properties here, e.g. user.email
    } else {
      console.log('User not found in localStorage');
    }
}
createUpdateForm(){
  this.UpdateUser=this.formBuilder.group({
    prenom: [this.user.prenom, Validators.required],
    nom: [this.user.nom, Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    Newpassword: ['', [Validators.required, Validators.minLength(8)]]
  })
}
edit(){
  let testpass:boolean = this.user.password==this.UpdateUser.value["password"]
  if (testpass){
    console.log("Mijoud")
    this.user.nom =this.UpdateUser.value["nom"]
    this.user.prenom = this.UpdateUser.value["prenom"]
    this.user.password = this.UpdateUser.value["Newpassword"]
    
    this.userService.UpdateUser(this.user).subscribe(updatedUser => {
      console.log('User updated:', updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      this.router.navigate(['/user']);
    }, error => {
      console.error('Error updating user:', error);
      alert('Error updating user. Please try again later.');
    });
  } else {
    alert("Wrong password");
  }
}
}
