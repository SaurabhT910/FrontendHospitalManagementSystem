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

  isUserLoggedIn(){
    console.log("Doctor Login #####");
   let user=sessionStorage.getItem("username");

    return !(user==null)
}
 isUserLogOut(){
    console.log("Doctor Logout****");
    sessionStorage.removeItem('username');
    return false;
    
}
}
