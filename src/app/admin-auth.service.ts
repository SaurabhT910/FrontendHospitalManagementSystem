import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }

  authenticate(username2:string,password:string){
    if(username2=="Rushikesh" && password=="Rushikesh@123"){

        sessionStorage.setItem("username2",username2)
        return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
      console.log("Admin Login!!!!!!!!!");
     let user=sessionStorage.getItem("username2");

      return !(user==null)
  }
  isUserLogOut(){
      console.log("Admin Logout");
      sessionStorage.removeItem('username2');
      return false;
      
  }
  
}
