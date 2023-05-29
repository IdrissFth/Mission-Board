import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from '../models/mission';
import { MissionserviceService } from '../services/missionservice.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMissions!:Mission[]
  user!: User;
  userLoggedIn!:boolean
  constructor(
    private router:Router,
    private Missionservice:MissionserviceService,
  ) { }

  ngOnInit(): void {
    
    this.getUser();
    this.Missionservice.Missions().subscribe(data => {
      this.allMissions = data;
    });
  }

  getUser(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      console.log('User:', this.user);
      this.userLoggedIn=true
    } else {
      console.log('User not found in localStorage');
    }
  }

Deco(){
  localStorage.clear()
  this.router.navigate(['/login']);
}
detailM(m: Mission): void {
  this.router.navigate(['/mission/detail/', m.code]);
}
}
