import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user!: User;
  constructor(
    private userService: UserServiceService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.getUser();
    if(this.user == null){
      this.router.navigate(['/login'])
    }
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

}

