import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isuserLoggedin = false;
  constructor() { }

  getUserStatus(){
    return this.isuserLoggedin;
   }
 
   setUserLoggedIn(){
     this.isuserLoggedin = true
   }
 
   setUserLoggedOut(){
     this.isuserLoggedin = false;
   }
}
