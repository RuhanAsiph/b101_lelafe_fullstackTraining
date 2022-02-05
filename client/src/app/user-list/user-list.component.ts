import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  
  delete(email:any){ 
    const res = this.authService.delete(email)
    if (res.status === 200) {
      
      alert(res.data)
      
    } else {
      alert(res.data)
    }
  }

  
  edit(email:any) {
    
    const navigationExtras:NavigationExtras = {
      queryParams: {
        SelectedEmail: email
      }
    }
    this.router.navigate(['/register'], navigationExtras) //implement this in html
    
  }
  logout(){
    console.log('test')
  }
  //custom func
  getUsers(){
    const res = this.authService.getUsers()
    if (res.status === 200) {
      this.users = res.data
    }
  }
 
}


