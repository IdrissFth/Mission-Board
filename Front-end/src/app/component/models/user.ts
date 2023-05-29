import { Mission } from "./mission";

export class User{
    public id!:Number;
    constructor(public email:String,public nom:String,public prenom:String,public password:String,public missionP:Mission[]){} 
}
