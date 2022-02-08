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
  
  back(){
     this.router.navigate(['/userlist'])
  }

  register(){
    this.authService.register(this.userModel).subscribe((res) => {
    
    })
  }

  update(){
    this.authService.update(this.userModel).subscribe((res) => {
      
    })
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
