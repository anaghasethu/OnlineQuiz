import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studenthomepage',
  templateUrl: './studenthomepage.component.html',
  styleUrls: ['./studenthomepage.component.css']
})
export class StudenthomepageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  GoToQuiz(){
    this.route.navigateByUrl("/student")

  }

  GoToGradebook(){
    this.route.navigateByUrl("/gradebook")

  }

  Logout(){
    this.route.navigateByUrl('')
  }

}
