import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:any;
  private clientid = "8c72951d2de9687a48aa"
  private clientsecret = "edfb2322c4ad62920e40429e8bb7d1cdd50ddcbe";
  
    constructor(private http:HttpClient) { 
      this.username ="catherine244";
    }
    getProfileInfo(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
  
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
    updateProfile(username:string){
      this.username = username;
    }
  }

