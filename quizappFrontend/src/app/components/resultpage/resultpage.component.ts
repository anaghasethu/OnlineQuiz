import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  scored = sessionStorage.getItem('scr')
  totalquestions = sessionStorage.getItem('total')

  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log(this.scored);
  }

  GoToQuizes(){
    this.route.navigateByUrl("/student")
  }

  GoToHome(){
    this.route.navigateByUrl("/stu_homepage")
  }

  
}
