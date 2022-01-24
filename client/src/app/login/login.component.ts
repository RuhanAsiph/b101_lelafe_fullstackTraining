import { Component, OnInit } from '@angular/core';
//implement linked list to store users
/*
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

