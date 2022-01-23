import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/*
//implement linked list to store users
class LinkedList {
  constructor(value:any){
    const head:any = {
      value: value,
      next: null
    }
    const tail:any = head;
    length = 1;
  }
}


const myLinkedList = new LinkedList(10);
console.log(myLinkedList)
*/

export class LoginComponent implements OnInit {

  authModel:any = {}
  userModel:any = {}
  userDB:any = []

  isSignUp:boolean = false;
  constructor() { }

  ngOnInit(): void {}
  
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

