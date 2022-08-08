import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {


  id = localStorage.getItem('id')
  name = localStorage.getItem('name')
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  GoToQuizDetails(){
    this.route.navigateByUrl("/quizlist")

  }

  Logout(){
    this.route.navigateByUrl('')
  }


  GoToStudentDetails(){
    this.route.navigateByUrl("/studentlist")
  }

  backToMain(){
    this.route.navigateByUrl("/")
  }
}
