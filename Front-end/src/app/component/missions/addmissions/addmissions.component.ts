import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { MissionserviceService } from '../../services/missionservice.service';

@Component({
  selector: 'app-addmissions',
  templateUrl: './addmissions.component.html',
  styleUrls: ['./addmissions.component.css']
})
export class AddmissionsComponent implements OnInit {

  MissionForm!: FormGroup;
  user!: User;
  today = new Date();
  day = this.today.getDate();
  month = this.today.getMonth() + 1; // Note that January is 0!
  year = this.today.getFullYear();
  
  constructor(
    private  formBuilder:FormBuilder,
    private router:Router,
    private missionservice:MissionserviceService,
  ) { }


  ngOnInit(): void {
    this.getUser();
    if(this.user == null){
      this.router.navigate(['/login'])
    }
    this.mymission()
  }
  getUser(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      console.log('User:', this.user);
    } else {
      console.log('User not found in localStorage');
    }
  }
 
  mymission(){
    this.MissionForm=this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
    })
  }
  SaveMission(){  
    this.missionservice.addMission(this.MissionForm.value,this.user.id)
    .subscribe (data => console.log(data));
    this.MissionForm.reset();
    this.router.navigate(['/Mymission']);
  }
}