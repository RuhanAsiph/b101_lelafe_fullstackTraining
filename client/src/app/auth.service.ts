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
    let index = this.userDB.findIndex((element:any) => element.email === email)
    if (index = -1) {
      this.userDB.splice(index, 1)
      return {
        status: 200,
        data: "successfully removed"
      }
    } else {
      return {
        status: 409,
        data: "error, lost index"
      }
    }

  }

  getUserByEmail(email:any){
    const user = this.userDB.find((user:any) => user.email === email)
    if (user) {
      return {
        status: 200,
        data: user
      }
    } else {
      return {
        status: 409,
        data: "user not found"
      }
    }
  }

  //custom functions
  getUsers() {
    return {
      status: 200,
      data: this.userDB
    }
  }
}
