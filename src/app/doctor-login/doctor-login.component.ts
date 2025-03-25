import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorAuthService } from '../doctor-auth.service';

@Component({
  selector: 'app-doctor-login',
  standalone: false,
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']

})
export class DoctorLoginComponent {
     constructor(private router:Router,private doctorAuthService:DoctorAuthService){}
     username:string='';
     password:string='';

    inValidLogin=false;

    checkLogin(){

      if(this.doctorAuthService.authenticate(this.username,this.password)){
         this.router.navigate(['doctor-dash']);
         this.inValidLogin=false;
      }
      else{
        alert("Invalid credentials!!!");
        this.router.navigate(['home']);
        this.inValidLogin=true;
      }

    }

}
