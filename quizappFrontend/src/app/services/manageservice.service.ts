import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class ManageserviceService {

  isuserLoggedin = false;
  userurl = "http://localhost:8080/api/user"
  constructor(private httpclient: HttpClient ) { }

  
  getUserStatus(){
    return this.isuserLoggedin;
   }
 
   setUserLoggedIn(){
     this.isuserLoggedin = true
   }
 
   setUserLoggedOut(){
     this.isuserLoggedin = false;
   }
   getAllUsers() : Observable<User[]>{
    console.log(this.httpclient.get<getUserResponse>(this.userurl).pipe(map(response => response._embedded.users)))
    return this.httpclient.get<getUserResponse>(this.userurl).pipe(map(response => response._embedded.users))
  }

  getStudentsByRole(): Observable<User[]>{
    const prodNameURL = "http://localhost:8080/api/user/search/findByRole/?role=" + "student" 
    return this.httpclient.get<getUserResponse>(prodNameURL).pipe(map(response => response._embedded.users))
  }
}

interface getUserResponse {
  _embedded : {
    users: User[]
  }

}