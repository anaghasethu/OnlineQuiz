import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/common/quiz';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-quiztest',
  templateUrl: './quiztest.component.html',
  styleUrls: ['./quiztest.component.css']
})
export class QuiztestComponent implements OnInit {

  quiz !: Quiz[];
  searchByCat!: string;
  constructor(private route:Router,private quiz_service : QuizserviceService,
    private activateRoute: ActivatedRoute,private service:QuestionserviceService) { }

  ngOnInit(): void {
    //   this.listOfQuizes()
   // this.listOfCategories()
   this.activateRoute.paramMap.subscribe(()=>{this.getQuizByCategory()})
  }

  listOfQuizes(){
    this.quiz_service.getAllQuizes().subscribe(data=>{
      console.log(data); 
      this.quiz = data;
    })
    
  }

  getQuizByCategory(){
    const CatName = this.activateRoute.snapshot.paramMap.get("categoryName");
    console.log(CatName)
    this.quiz_service.getQuizByCategory(CatName).subscribe((data=>{
      this.quiz = data;
      console.log(data)
    }))
  }

  goToTest(quizId:Number){
   this.service.getQuestionByQuizId(quizId)
   console.log(this.service.getQuestionByQuizId(quizId))
    this.route.navigateByUrl("/quiz/"+quizId);
  }
}

