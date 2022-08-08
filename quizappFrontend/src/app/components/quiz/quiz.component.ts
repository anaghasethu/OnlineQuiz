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
  selected=-1;
  question !: Question[]
  quiz !: Quiz[];
  score = 0;
  totalattempted = 0;
  Quizname = localStorage.getItem('qname')
  constructor(private service : QuestionserviceService,private quiz_service : QuizserviceService,
    private activateRoute : ActivatedRoute,private result_service : ResultserviceService,
    private route: Router) { }

  ngOnInit(): void {
    //  this.listOfQuestions()
  //  this.listOfQuizes()
  this.activateRoute.paramMap.subscribe(()=>{this.getQuestionByQuizId()})
  console.log(this.score)
  }

  getQuestionByQuizId(){
    const quizid = +this.activateRoute.snapshot.paramMap.get("quizId");
    console.log(quizid)
    var count = 0
    this.service.getQuestionByQuizId(quizid).subscribe((data=>{
      this.question = data;
      for(let q in this.question){
        count += 1
      }
      sessionStorage.setItem('total',JSON.stringify(count))
      console.log("number of questions"+count)
      console.log(data)
    }));
  }


  checkAnswer(choice : string, answer : string){
    console.log(choice)
    console.log(answer)
    if(choice === answer){
      this.score += 1;
      this.totalattempted +=1
      console.log(this.score)
    }else{
    console.log("after if")
    this.totalattempted += 1
    }

  }

  
  submitQuiz(){
    const quizid = +this.activateRoute.snapshot.paramMap.get("quizId");
    const Id = localStorage.getItem('id')
    sessionStorage.setItem('qid',quizid.toString())
    sessionStorage.getItem('qid')
    const rID = 0;
    sessionStorage.setItem('scr',this.score.toString())
    sessionStorage.getItem('scr')
    // sessionStorage.setItem('total',this.totalattempted.toString())
    
    sessionStorage.getItem('total')
    const Qname = localStorage.getItem('qname')
    console.log(Id)
    console.log(quizid)
    this.result_service.saveResult(new Result(rID,Id,quizid,this.score,Qname)).subscribe(data => {
      console.log(data)
      if(this.score > 6){
      this.route.navigateByUrl("/result");
      }else{
        this.route.navigateByUrl("/resultfail");
      }
    }); 

  } 

}

