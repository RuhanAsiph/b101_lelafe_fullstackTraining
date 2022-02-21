import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel:any = {}
  isUpdate:boolean = false;
  id:any;

  constructor(private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get("id")
   }
  

  ngOnInit(): void {
    if(this.id){
      this.isUpdate = !this.isUpdate
      this.getUserById()
    }
  }
  
  back(){
     this.router.navigate(['/userlist'])
  }

  register(){
    this.authService.register(this.userModel).subscribe((res:any) => {
      if (res.status === 200) {
        Swal.fire(res.data)
        this.userModel = {}
      } else {
        Swal.fire(res.data)
      }
    })
  }

  update(){
    this.authService.update(this.userModel, this.id).subscribe((res:any) => {
      if (res.status === 200) {
        Swal.fire(res.data)
        this.userModel = {}
        this.back()
      } else {
        Swal.fire(res.data)
      }
    })
  }

  getUserById(){
    //where are we using this?
    this.authService.getUserById(this.id).subscribe((res:any) => {
      if (res.status === 200) {
      this.userModel = res.data
    } else {
      alert(res.data)
    }
    })
  }
}
