import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {

  constructor() { }

  authenticate(username:string,password:string){

    if(username=="Saurabh" && password=="Talwar@910"){
        sessionStorage.setItem("username",username);
        return true;
    }
    else{
      return false;
    }
  }
}
