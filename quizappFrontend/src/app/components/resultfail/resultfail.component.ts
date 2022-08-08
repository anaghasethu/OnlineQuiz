import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultfail',
  templateUrl: './resultfail.component.html',
  styleUrls: ['./resultfail.component.css']
})
export class ResultfailComponent implements OnInit {

  fail_score = sessionStorage.getItem('scr')
  totalquestions = sessionStorage.getItem('total')
  wrongCount = (+this.totalquestions) - (+this.fail_score);
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  GoToQuizes(){
    this.route.navigateByUrl("/student")
  }
/*
  attemptAgain(){
    this.route.navigateByUrl("/test/"+quizID)
  } */

  GoToHome(){
    this.route.navigateByUrl("/stu_homepage")
  }

}
