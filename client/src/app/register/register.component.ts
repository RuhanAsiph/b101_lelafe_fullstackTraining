import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel:any = {}
  isUpdate:boolean = false;
  email:any;

  constructor(private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.email = this.activatedRoute.snapshot.queryParamMap.get("SelectedEmail")
   }
  

  ngOnInit(): void {
    if(this.email){
      this.isUpdate = !this.isUpdate
      this.getUserByEmail()
    }
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

  update(){
    const res = this.authService.update(this.userModel)
    if (res.status === 200) {
      alert(res.data)
      this.userModel = {}
    } else {
      alert(res.data)
    }
  }

  getUserByEmail(){
    const res = this.authService.getUserByEmail(this.email)
    if (res.status === 200) {
      this.userModel = res.data
    } else {
      alert(res.data)
    }
  }
}
