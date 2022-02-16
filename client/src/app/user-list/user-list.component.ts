import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  
  users:any = []
  
  userModel:any = {}
  
  
  //lifecycle hook
  ngOnInit(): void {
    
    this.getUsers()
  }

  
  delete(_id:any){ 
    this.authService.delete(_id).subscribe((res:any) => {
      if (res.status === 200) {
        Swal.fire(res.data)
        this.getUsers()
      } else {
        Swal.fire(res.data)
      }
    })
  }

  
  edit(email:any) {
    //?
    const navigationExtras:NavigationExtras = {
      queryParams: {
        SelectedEmail: email
      }
    }
    Swal.fire({
      title: 'Are you sure you want to edit the user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/register'], navigationExtras)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


  logout(){
    console.log('test')
  }
  //custom func
  getUsers(){
    
    this.authService.getUsers().subscribe((res:any) => {
      if (res.status === 200) {
        this.users = res.data
      }
    })
    
  }
 
}


