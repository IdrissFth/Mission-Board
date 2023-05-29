import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/auth/register/register.component';
import { LoginComponent } from './component/auth/login/login.component';
import { UserprofileComponent } from './component/auth/userprofile/userprofile.component';
import { UsereditComponent } from './component/auth/userprofile/useredit/useredit.component';
import { HomeComponent } from './component/home/home.component';
import { UsermissionComponent } from './component/missions/usermission/usermission.component';
import { AddmissionsComponent } from './component/missions/addmissions/addmissions.component';
import { EditmissionsComponent } from './component/missions/editmissions/editmissions.component';
import { DetailmissionsComponent } from './component/missions/detailmissions/detailmissions.component';

const routes: Routes = [
  {path:'login',title:'Authentification', component:LoginComponent},
  {path:'register',title:'Authentification', component:RegisterComponent},
  {path:"user",title:'Profile',component:UserprofileComponent},
  {path:"edituser",title:'Editing',component:UsereditComponent},
  {path:"Home",title:'Mission Board',component:HomeComponent},
  {path:"Mymission",component:UsermissionComponent},
  {path:"addmission",component:AddmissionsComponent},
  {path:"Mymission/:m",component:EditmissionsComponent},
  {path:"mission/detail/:m",component:DetailmissionsComponent},
  {path:"admin",component:AddmissionsComponent},
  {path:'',component:HomeComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
