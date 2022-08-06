import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/common/question';
import { Quiz } from 'src/app/common/quiz';
import { Result } from 'src/app/common/result';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import { ResultserviceService } from 'src/app/services/resultservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question !: Question[]
  quiz !: Quiz[];
  score = 0;

  constructor(private service : QuestionserviceService,private quiz_service : QuizserviceService,
    private activateRoute : ActivatedRoute,private result_service : ResultserviceService,
    private route: Router) { }

  ngOnInit(): void {
    //  this.listOfQuestions()
  //  this.listOfQuizes()
  this.activateRoute.paramMap.subscribe(()=>{this.getQuestionByQuizId()})
  console.log(this.score)
  }


  listOfQuestions(){
    this.service.getAllQuestions().subscribe(data=>{
      console.log(data); 
      this.question = data;
    })
  }

  listOfQuizes(){
    this.quiz_service.getAllQuizes().subscribe(data=>{
      console.log(data); 
      this.quiz = data;
    })
  }

  getQuestionByQuizId(){
    const quizid = +this.activateRoute.snapshot.paramMap.get("quizId");
    console.log(quizid)
    this.service.getQuestionByQuizId(quizid).subscribe((data=>{
      this.question = data;
      console.log(data)
    }));
  }

  checkAnswer(choice : string, answer : string){
    console.log(choice)
    console.log(answer)
    if(choice === answer){
      this.score += 1;
      console.log(this.score)
    }else{
    console.log("after if")
    }

  }
  
  submitQuiz(){
    const quizid = +this.activateRoute.snapshot.paramMap.get("quizId");
    const Id = localStorage.getItem('id')
    const rID = 0;
    // console.log(Id)
    // console.log(rID)
    this.result_service.saveResult(new Result(rID,Id,quizid,this.score)).subscribe(data => {
      console.log(data)
      this.route.navigateByUrl("/student");
    }); 

  } 
  
}

