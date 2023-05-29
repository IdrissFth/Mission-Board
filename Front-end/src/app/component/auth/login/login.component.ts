import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allusers!:User[]
  loginForm!: FormGroup;
  constructor(
    private  formBuilder:FormBuilder,
    private router: Router,
    private Uservice:UserServiceService
  ) { }

  ngOnInit(): void {
  this.createLoginForm();
  this.Uservice.User().subscribe(data =>{
    console.log(data)
    this.allusers=data})
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
login(){
  let personne:User = this.allusers.filter(e => e.email==this.loginForm.value["email"] && e.password==this.loginForm.value["password"])[0]
  if (personne){
    console.log("jaweb behy <3")
    localStorage.setItem('user', JSON.stringify(personne))
    this.router.navigate(['/Home'])
  }else{
    console.log("jawek mouch behy")
  }
} 
}
