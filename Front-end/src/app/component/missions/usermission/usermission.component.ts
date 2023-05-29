import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { Mission } from '../../models/mission';
import { MissionserviceService } from '../../services/missionservice.service';

@Component({
  selector: 'app-usermission',
  templateUrl: './usermission.component.html',
  styleUrls: ['./usermission.component.css']
})
export class UsermissionComponent implements OnInit {


  user!: User;
  constructor(
    private userService: UserServiceService,
    private router:Router,
    private Uservice:UserServiceService,
    private Missionservice:MissionserviceService
  ) { }

  ngOnInit(): void {
    this.getUser();
    if(this.user == null){
      this.router.navigate(['/login'])
    }
    this.updateUser()
  }
  
  updateUser(){
    this.Uservice.User().subscribe(data =>{
    this.user=data.filter(e =>this.user.id == e.id)[0]})
    localStorage.setItem('user', JSON.stringify(this.user));
    console.log(this.user)
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
  editMission(m:Mission){
    this.router.navigate(['/Mymission/',m.code]);
  }
  deletM(m:Mission){
    console.log("test")
    this.Missionservice.DeleteMission(m.code).subscribe(data =>{console.log("Delet works")})
    this.updateUser()
  }
}
