import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auth } from '../models/authModel';
import Swal from 'sweetalert2'


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
    
  }

  login() {
    this.authService.login(this.authModel).subscribe((res:any) => {
      if (res.status === 200) {
      Swal.fire(res.data)
      this.router.navigate(['/userlist'])
      this.authModel = {}
    } else {
      Swal.fire(res.data)
    }
    })

    
  }
  
}

 
 // flow: html -> ts -> service --> server(nodeapi) -> index(main server.js) -> routes -> controllers   


