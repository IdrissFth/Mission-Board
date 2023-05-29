import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionserviceService {

  apiUrl = 'http://localhost:8085/Mission';
  constructor(
    private httpClient: HttpClient
  ) {}
  MissionById(missionId:Number):Observable<Mission>{
    let newPath = this.apiUrl +"/"+ missionId
    return this.httpClient.get<Mission>(newPath)
  }
  Missions():Observable<Mission[]>{
    let newPath = this.apiUrl
    return this.httpClient.get<Mission[]>(newPath)
  }
  addMission(Mission:Mission,userid:Number):Observable<Mission>{
    return this.httpClient.post<Mission>(this.apiUrl+"?id="+userid,Mission)
  }
  UpdateMission(Mission:Mission):Observable<Mission>{
    return this.httpClient.put<Mission>(this.apiUrl+"/"+Mission.code,Mission)
  }
  DeleteMission(missionid:Number):Observable<Mission>{
    return this.httpClient.delete<Mission>(this.apiUrl+"/"+missionid)
  }
}
