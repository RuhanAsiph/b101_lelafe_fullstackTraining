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

  ngOnInit(): void {
    this.testBackend()
  }
  testBackend(){
    this.authService.testBackend().subscribe((res:any) => {
      alert(res.data)
    })
  }
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
  s5 - study http methods
*/
