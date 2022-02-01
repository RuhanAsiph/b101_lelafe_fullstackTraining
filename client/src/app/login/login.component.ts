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
  userDB:any = []
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
    // const userFound = this.userDB.find((user:any) => user.email === this.authModel.email && user.password === this.authModel.password)

    // if (userFound) {
    //   alert("sucess")
    //   this.isLoggedIn = true;
    // } else {
    //   alert("please register")
    // }
  }


  getUsers(){
    const res = this.authService.getUsers()
    console.log(res)
    if (res.status === 200) {
      this.users = res.data
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
  }

  update(){
    let index = this.userDB.findIndex((element:any) => element.email === this.userModel.email)
    if (index != -1) {
      this.userDB[index] = this.userModel;
      this.userModel = {}
      alert("user updated")
    } else {
      alert("internal error, contact admin")
    }
  }
}

