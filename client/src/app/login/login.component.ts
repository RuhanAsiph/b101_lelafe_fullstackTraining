import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auth } from '../models/authModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authModel:Auth = {
    email: '',
    password: ''
  }
  
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {}
  
  login() {
    const res = this.authService.login(this.authModel)

    if (res.status === 200) {
      this.router.navigate(['/userlist'])
      alert(res.data)
      this.authModel = {}
    } else {
      alert(res.data)
    }
  }
  
}

//todo 
/* 
  flow: html -> ts -> service --> server(nodeapi) -> index(main server.js) -> routes -> controllers   
  s1 - redirection from update to user list 
  s2 - when userList = empty display no users
  s3 - what is nodejs -> disadvantages, expressjs, async, non blocking input output, event loop, promises, callback, generators, 
  s4 - index.js in server 
  s5 - study http methods
*/