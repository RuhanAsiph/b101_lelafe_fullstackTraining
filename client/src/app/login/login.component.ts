import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ AuthService ]
})


export class LoginComponent implements OnInit {

  authModel:any = {}
  userModel:any = {}
  userDB:any = []
  isSignUp:boolean = false;
  isLoggedIn:boolean = false;
  isUpdate:boolean = false;
  disabled:boolean = false;
  constructor(private serv:AuthService) { }

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

  delete(email:any){ 
      let index = this.userDB.findIndex((element:any) => element.email === email)
      if (index != -1) {
        this.userDB.splice(index, 1)
        alert("removed")
      }
      else {
        console.log('forbidden') 
      }
  }
  edit(user:any) {
    this.userModel = user
    this.isSignUp = true
    this.isLoggedIn = false
    this.isUpdate = !this.isUpdate
    this.disabled = !this.disabled
  }

  update(){
    //s4 - disable email input using property bind, when performing edit
    let index = this.userDB.findIndex((element:any) => element.email === this.userModel.email)
    if (index != -1) {
      this.userDB.splice(index, 1)
      this.userDB.push(this.userModel)
      this.userModel = {}
      alert("user updated")
    } else {
      alert("internal error, contact admin")
    }
  }
}

