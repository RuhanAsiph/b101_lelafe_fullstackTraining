import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Auth } from '../models/authModel';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users:any = []
  authModel:Auth = {
    email: '',
    password: ''
  }
  userModel:any = {}
  isSignUp:boolean = false;
  isLoggedIn:boolean = false;
  isUpdate:boolean = false;
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {}
  
  login() {
    const res = this.authService.login(this.authModel)
    if (res.status === 200) {
      this.isLoggedIn = true;
      this.getUsers()
      alert(res.data)
    } else {
      alert(res.data)
    }
  }
  
  toggle(){
    this.isSignUp = !this.isSignUp
  }
  
  register(){
    const res = this.authService.register(this.userModel)
    if (res.status === 200) {
      alert(res.data)
      this.userModel = {}
    } else {
      alert(res.data)
    }
  }

  delete(email:any){ 
    const res = this.authService.delete(email)
    if (res.status === 200) {
      alert(res.data)
    } else {
      alert(res.data)
    }
  }
  edit(user:any) {
    this.userModel = user
    this.isSignUp = true
    this.isLoggedIn = false
    this.isUpdate = !this.isUpdate
  }

  update(){
    const res = this.authService.update(this.userModel)
    if (res.status === 200) {
      alert(res.data)
      this.userModel = {}
    } else {
      alert(res.data)
    }
  }

  //custom functions to perform tasks
  getUsers(){
    const res = this.authService.getUsers()
    if (res.status === 200) {
      this.users = res.data
    }
  }
}

