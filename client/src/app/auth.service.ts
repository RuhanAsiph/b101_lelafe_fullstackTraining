import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from './models/authModel';
import { Regis } from './models/regisModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = environment.serverUrl
  userDB:any = [{
    email: "abc@abc",
    password: "abc"
  }
  ]

  constructor(private http:HttpClient) { }


  //backend
  testBackend(){
    return this.http.get(`${this.serverUrl}test`)
  }
  
  login(authModel:Auth) {
    return this.http.post(`${this.serverUrl}login`, authModel)  
  }

  register(userModel:Regis){
    return this.http.post(`${this.serverUrl}register`, userModel)
  }

  update(userModel:Regis){
    return this.http.put(`${this.serverUrl}update-user/${userModel.email}`, userModel)
  }

  delete(email:any){
    return this.http.delete(`${this.serverUrl}delete-user/${email}`)
  }

  getUserByEmail(email:any){
    //?
    return this.http.get(`${this.serverUrl}get-user/${email}`)
    
  }

  //custom functions
  getUsers() {
    return {
      status: 200,
      data: this.userDB
    }
  }
}
