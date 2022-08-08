import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/common/result';
import { ResultserviceService } from 'src/app/services/resultservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentperformance',
  templateUrl: './studentperformance.component.html',
  styleUrls: ['./studentperformance.component.css']
})
export class StudentperformanceComponent implements OnInit {


  results : Result[];
  Uid = localStorage.getItem('UID')
  total_score = 0 ;
  constructor(private route : Router,private activateRoute : ActivatedRoute,private res_service : ResultserviceService) { }

  ngOnInit(): void {
    this.getResultByUserId();
    
  }

  getResultByUserId(){
    const uid = this.activateRoute.snapshot.paramMap.get("userid");
    localStorage.setItem('UID',uid)
   const Uid = sessionStorage.getItem('UID')
    this.res_service.getResultByUserId(uid).subscribe(data =>{
      this.results = data

      this.results.forEach((q) => {
        this.total_score += (+q.totalCorrect)
      })
      console.log(this.total_score)

    })
   
  }

  GoToHome(){
    this.route.navigateByUrl("/admin")
  }    

  GoToPre(){
    this.route.navigateByUrl("/studentlist")
  }
  

}
