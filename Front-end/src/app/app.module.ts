import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { UserprofileComponent } from './component/auth/userprofile/userprofile.component';
import { UsereditComponent } from './component/auth/userprofile/useredit/useredit.component';
import { HomeComponent } from './component/home/home.component';
import { UsermissionComponent } from './component/missions/usermission/usermission.component';
import { AddmissionsComponent } from './component/missions/addmissions/addmissions.component';
import { EditmissionsComponent } from './component/missions/editmissions/editmissions.component';
import { DetailmissionsComponent } from './component/missions/detailmissions/detailmissions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    UsereditComponent,
    HomeComponent,
    UsermissionComponent,
    AddmissionsComponent,
    EditmissionsComponent,
    DetailmissionsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
