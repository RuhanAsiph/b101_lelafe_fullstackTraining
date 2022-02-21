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
  constructor(private http:HttpClient) { }

  
  //backend
  testBackend(){
    return this.http.get(`${this.serverUrl}test`)
  }
  
  login(authModel:Auth) {
    return this.http.post(`${this.serverUrl}user/login`, authModel)  
  }

  register(userModel:Regis){
    return this.http.post(`${this.serverUrl}user/register`, userModel)
  }

  update(userModel:Regis, id:any){
    return this.http.put(`${this.serverUrl}user/update-user/${id}`, userModel)
  }

  delete(_id:any){
    return this.http.delete(`${this.serverUrl}user/delete-user/${_id}`)
  }

  getUserById(id:any){
    //? where
    return this.http.get(`${this.serverUrl}user/get-user/${id}`)
    
  }

  //custom functions
  getUsers() {
    return this.http.get(`${this.serverUrl}user/get-users`)
   
  }
}
