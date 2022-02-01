import { Injectable } from '@angular/core';
import { Auth } from './models/authModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userDB:any = [{
    email: "abc@abc",
    password: "abc"
  }]

  constructor() { }

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

  getUsers() {
    return {
      status: 200,
      data: this.userDB
    }
  }
}
