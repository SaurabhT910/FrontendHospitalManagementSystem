import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';


@Component({
  selector: 'app-admin-auth',
  standalone: false,
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.css'
})
export class AdminAuthComponent {
  
 constructor(private adminAuthService:AdminAuthService,private rauter:Router){}
  username2:string='';
  password:string='';
  inValidLogin=false;

  checkLogin(){

     if(this.adminAuthService.authenticate(this.username2,this.password)){
      this.rauter.navigate(["/admin"]);
      this.inValidLogin=false;
     }
     else{
      
      alert("Invalid credentials!!!");
      this.rauter.navigate(['home']);
      this.inValidLogin=true;
     }

  }

}
