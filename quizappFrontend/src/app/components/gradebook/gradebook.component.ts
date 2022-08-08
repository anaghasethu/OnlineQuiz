import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Quiz } from 'src/app/common/quiz';
import { Result } from 'src/app/common/result';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import { ResultserviceService } from 'src/app/services/resultservice.service';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  ID = localStorage.getItem('id')
  quiz : Quiz[];
  category_list : Category[];
  result : Result[];
  constructor(private route : Router,private cat_service : CategoryserviceService,private quiz_service : QuizserviceService,
    private result_service : ResultserviceService) { }

  ngOnInit(): void {
    this.listOfQuizes()
    this.listOfResult()
  }

  listOfResult(){
    this.result_service.getAllResults().subscribe(data=>{
      console.log(data); 
      this.result = data;
    })

  }

  listOfQuizes(){
    this.cat_service.getAllCategories().subscribe(data=>{
      console.log(data); 
      this.category_list = data;
    })
  }
  GetCategory(categoryName : string){ 
    this.quiz_service.getQuizByCategory(categoryName).subscribe(data=>{
      console.log(data); 
      this.quiz = data;
    })


  }

  
}
