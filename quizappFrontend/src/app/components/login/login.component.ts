import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ManageserviceService } from 'src/app/services/manageservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ManageserviceService, private route: Router) { }
  users: User[];
  ngOnInit(): void {
    this.listOfUser();
  }

  listOfUser(){
    this.service.getAllUsers().subscribe(data=>{
      console.log(data); 
      this.users = data;
    })
  }
  // loginSubmit2(loginForm: any){
  //   if(loginForm.email === 'HR' && loginForm.password === 'HR') {
  //     this.service.setUserLoggedIn();
  //     this.router.navigate([""])
  //   }else{
  //     alert('Invalid credentials')
  //   }
  // }

  // checkLogin(){
  //   if(this.service.getUserStatus())
  //     this.service.setUserLoggedOut();
  // }

  loginSubmit2(loginForm:any){
  
    this.users.forEach((user:any) =>{
      if(((loginForm.userID === user.userID) && (loginForm.password === user.password) && (user.role === "student")) == true){
        console.log(user.userID)
        console.log(loginForm.userID)
        console.log(user.password)
        console.log(loginForm.password)
        localStorage.setItem('id' , user.userID)
        localStorage.getItem('id')
        this.route.navigateByUrl("/student")
      }else if(((loginForm.userID === user.userID) && (loginForm.password === user.password) && (user.role === "role"))){
        console.log(user.userID);
        this.route.navigateByUrl("/admin");
      }
    })
  }

  GotoStudent(){
    this.route.navigateByUrl("/student")
  }

}
