import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Quiz } from 'src/app/common/quiz';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {

  category_list : Category[];
  quiz : Quiz[];
  

  constructor(private route : Router,private que_service:QuestionserviceService,private quiz_service : QuizserviceService,private cat_service : CategoryserviceService) { }

  ngOnInit(): void {
    this.listOfQuizes()
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

  goToTestPage(quizId:Number){
    
    this.que_service.getQuestionByQuizId(quizId)
    
    console.log(this.que_service.getQuestionByQuizId(quizId))
     this.route.navigateByUrl("/quizquestion/"+quizId);
   }

   GoToPre(){
    this.route.navigateByUrl("/admin")
  }

}
