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
  isLoggedIn:boolean = false;
  constructor() { }

  ngOnInit(): void {}
  
  login() {
    
    const userFound = this.userDB.find((user:any) => user.email === this.authModel.email && user.password === this.authModel.password)

    if (userFound) {
      alert("sucess")
      this.isLoggedIn = true;
    } else {
      alert("please register")
    }
  }

  toggle(){
    this.isSignUp = !this.isSignUp
  }
  
  register(){
        const isExists = this.userDB.some((user:any) => user.email === this.userModel.email)
        if (isExists) {
          alert('user exists')
        }
        else {
          this.userDB.push(this.userModel)
          this.userModel = {}
          alert("user successfully registered")
        }
  }
}

