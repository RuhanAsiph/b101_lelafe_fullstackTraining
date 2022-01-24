import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  authModel:any = {}
  userModel:any = {}
  userDB:any = []

  isSignUp:boolean = false;
  constructor() { }

  ngOnInit(): void {}
  
  login() {
    
    const userFound = this.userDB.find((user:any) => user.email === this.authModel.email && user.password === this.authModel.password)

    if (userFound) {
      alert("sucess")

    } else {
      alert("please register")
    }
  }

  toggle(){
    this.isSignUp = !this.isSignUp
  }
  
  register(){
    if (this.userDB.length == 0) {
      this.userDB.push(this.userModel)
      alert("user successfully registered")
      this.userModel = {}
    } else {
      for (let i = 0; i < this.userDB.length; i++){
        if (this.userDB[i].email !== this.userModel.email) {
          this.userDB.push(this.userModel)
          alert("user successfully registered")
          this.userModel = {}
          break;
        } else {
          alert("please use a different email")
          break;
        }
      }
    }
  }
}

