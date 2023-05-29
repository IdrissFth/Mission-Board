import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Mission } from '../../models/mission';
import { MissionserviceService } from '../../services/missionservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-detailmissions',
  templateUrl: './detailmissions.component.html',
  styleUrls: ['./detailmissions.component.css']
})
export class DetailmissionsComponent implements OnInit {

  user!:User
  mission!:Mission
  constructor(
    private router:Router,
    private missionservice:MissionserviceService,
    public activeroute: ActivatedRoute,
    public userService:UserServiceService
  ) { }

  ngOnInit(): void {
    this.missionservice.MissionById(this.activeroute.snapshot.params['m']).subscribe(data => {
      this.mission = data;
    });
    this.getUser()
  }
  getUser(): void {
    this.userService.User().subscribe(data => {
      this.user = data.filter(e=> e.missionP.filter(code=>code.code == this.mission.code))[0]
      if(this.user){
        console.log("userfound")
      }else{console.log("notfound")}
    })
  }
  gotoProfile(){
    
  }
}
