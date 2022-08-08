import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {


  ID = localStorage.getItem('id')
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  GoToQuizDetails(){
    this.route.navigateByUrl("/quizlist")

  }


  GoToStudentDetails(){
    this.route.navigateByUrl("/studentlist")
  }

  backToMain(){
    this.route.navigateByUrl("/")
  }
}
