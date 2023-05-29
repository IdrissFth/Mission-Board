import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MissionserviceService } from '../../services/missionservice.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-editmissions',
  templateUrl: './editmissions.component.html',
  styleUrls: ['./editmissions.component.css']
})

export class EditmissionsComponent implements OnInit {

  user!:User
  editForm!:FormGroup
  mission!:Mission
  constructor(
    private  formBuilder:FormBuilder,
    private router:Router,
    private missionservice:MissionserviceService,
    public activeroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUser();
    if (this.user == null) {
      this.router.navigate(['/login'])
    }
    this.missionservice.MissionById(this.activeroute.snapshot.params['m']).subscribe(data => {
      console.log(data)
      this.mission = data;
      this.mymission(); 
    });
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
 
  mymission() {
    this.editForm = this.formBuilder.group({
      titre: [this.mission.titre, Validators.required],
      description: [this.mission.description, Validators.required],
      prix: [this.mission.prix, Validators.required],
      status: [this.mission.status === true ? 'true' : 'false', Validators.required]
    });
  }

  SaveMission(){
       this.mission.titre = this.editForm.value.titre
        this.mission.description= this.editForm.value.description
        this.mission.prix= this.editForm.value.prix
        this.mission.status = this.editForm.value.status
      
    this.missionservice.UpdateMission(this.mission).subscribe(updatedMission => {
      console.log('Mission updated:', updatedMission);
      
      this.router.navigate(['/Mymission']);
    })
  }
  }

