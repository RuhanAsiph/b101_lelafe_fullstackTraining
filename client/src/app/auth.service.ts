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

  login(authModel:Auth) {
    const userFound = this.userDB.find((user:any) => user.email === authModel.email && user.password === authModel.password )
    
    if (userFound) {
    
      return {
        status:200,
        data: "user Authenticated"
      }
    } else {
      return {
        status:409,
        data: "invalid email or password"
      }
    }
    
  }

  register(userModel:Regis){
    const isExists = this.userDB.some((user:any) => user.email === userModel.email)
    if (!isExists) {
      this.userDB.push(userModel)
      return {
        status: 200,
        data: "User sucessfully registered"
      }
    } else {
      return {
        status: 409,
        data: "user already exists"
      }
    }
  }

  update(userModel:Regis){
    let index = this.userDB.findIndex((element:any) => element.email === userModel.email)
    if (index != -1) {
      this.userDB[index] = userModel;
      return {
        status: 200,
        data: "user update success"
      }
    } else {
      return {
        status: 407,
        data: "forbidden endpoint"
      }
    }
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
