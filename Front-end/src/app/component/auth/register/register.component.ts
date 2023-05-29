import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allusers!:User[]
  registerForm!: FormGroup;
  submitted = false;
  dataLoaded=false;
  constructor(
    private  formBuilder:FormBuilder,
    private Uservice:UserServiceService,
    private router:Router
  ) { }

  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.createLoginForm();
    this.Uservice.User().subscribe(data =>{
      console.log(data)
      this.allusers=data})
  }
  createLoginForm(){
    this.registerForm=this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  register(){  
    let personne:User = this.allusers.filter(e => e.email==this.registerForm.value["email"])[0]
  if (personne){
    console.log("already in use")
  }else{
      this.Uservice.AddUser(this.registerForm.value)
    .subscribe (data => console.log(data));
      this.registerForm.reset();
      this.router.navigate(['/login']);
  }
}
}