import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/common/result';
import { TotalResult } from 'src/app/common/total-result';
import { User } from 'src/app/common/user';
import { ManageserviceService } from 'src/app/services/manageservice.service';
import { ResultserviceService } from 'src/app/services/resultservice.service';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  results : Result[];
  users : User[];
  total_Res : TotalResult[];
  constructor(private route : Router,private student_service : ManageserviceService,
    private res_service : ResultserviceService) { }

  ngOnInit(): void {
    this.getStudentsList()
    this.getAllResults()
  }



getAllResults(){
  this.res_service.getAllResults().subscribe(data =>{
    this.results = data
  })

}

GoToStudent(userid:String){
this.route.navigateByUrl("/studentperformance/"+userid)

}

  getStudentsList(){
    this.student_service.getStudentsByRole().subscribe(data =>{
      this.users = data
    })

  }

  GoToHome(){
    this.route.navigateByUrl("/admin")
  }


 

}
