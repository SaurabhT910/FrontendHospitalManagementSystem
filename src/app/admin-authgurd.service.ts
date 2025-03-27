import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';
import { DoctorAuthService } from './doctor-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthgurdService implements CanActivate{

  constructor(private adminauthService:AdminAuthService,private router:Router,private doctorAuthservice:DoctorAuthService) { }
  canActivate(){
   
    if(this.adminauthService.isUserLoggedIn() || this.doctorAuthservice.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['admin-login']);
      return false;
    }
  }
  
}
