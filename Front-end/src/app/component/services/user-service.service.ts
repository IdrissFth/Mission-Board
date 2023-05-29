import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl = 'http://localhost:8085/User';
  constructor(
    private httpClient: HttpClient
  ) {}
  UserById(userId:Number):Observable<User>{
    let newPath = this.apiUrl + "/" + userId
    return this.httpClient.get<User>(newPath)
  }
  User():Observable<User[]>{
    let newPath = this.apiUrl
    return this.httpClient.get<User[]>(newPath)
  }
  AddUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl,user)
  }
  UpdateUser(user:User):Observable<User>{
    console.log(this.apiUrl+"/"+user.id)
    return this.httpClient.put<User>(this.apiUrl+"/"+user.id,user)
  }
  UserDel(userId:Number):Observable<User>{
    return this.httpClient.delete<User>(this.apiUrl+"/"+userId)
  }
}
