import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DoctorAuthService } from './doctor-auth.service';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthgurdService implements CanActivate{

  constructor(private doctorAuthservice:DoctorAuthService,private router:Router,private adminAuthService:AdminAuthService) { }
  canActivate(){
     if(this.doctorAuthservice.isUserLoggedIn()|| this.adminAuthService.isUserLoggedIn()){
      
      return true;
     }
     else{
      this.router.navigate(['admin-login']);
      return false;
     }
  }
}
