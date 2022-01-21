import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  authModel:any = {}
  

  //save users
  userModel:any = {} //push in the userDB arr
  //use push method
  userDB:any = []
  
  //alert(user saved)

  isSignUp:boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  
  login() {
    const authUser:any = this.authModel.username
    const authPass:any = this.authModel.password
    
    const userFound:any = this.userDB.find(function findUser(user:any){
      return user.username ===  authUser && user.password === authPass
    })
    if (userFound === undefined) {
      alert("Please register")
    } else {
      alert("sucess")
    }
  }

  toggle(){
    this.isSignUp = !this.isSignUp
  }
  
  register(){
    this.userDB.push(this.userModel)
  }
}
 
