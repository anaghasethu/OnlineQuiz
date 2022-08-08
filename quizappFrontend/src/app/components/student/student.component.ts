import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Quiz } from 'src/app/common/quiz';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private route:Router,private quiz_service :QuizserviceService,private cat_service : CategoryserviceService) { }
  quiz !: Quiz[];
  category : Category[];

  ngOnInit(): void {
    this.listOfQuizes()
  }

  GotoQuiz(categoryName:string){
    
    this.quiz_service.getQuizByCategory(categoryName)
    this.route.navigateByUrl("/test/"+categoryName);
  }

  GotoApt(){
     this.quiz_service.getQuizByCategory("Aptitude")
     this.route.navigateByUrl("/test/"+"aptitude");
  }

  backToMain(){
    this.route.navigateByUrl("/")
  }

  listOfQuizes(){
    this.cat_service.getAllCategories().subscribe(data=>{
      console.log(data); 
      this.category = data;
    })
  }


}
