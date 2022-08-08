import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/common/question';
import { Quiz } from 'src/app/common/quiz';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import { ResultserviceService } from 'src/app/services/resultservice.service';

@Component({
  selector: 'app-quizquestions',
  templateUrl: './quizquestions.component.html',
  styleUrls: ['./quizquestions.component.css']
})
export class QuizquestionsComponent implements OnInit {

  question : Question[];
  quiz !: Quiz[];
  constructor(private service : QuestionserviceService,private quiz_service : QuizserviceService,
    private activateRoute : ActivatedRoute,private result_service : ResultserviceService,
    private route: Router) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getQuestionByQuizId()})
  }
  getQuestionByQuizId(){
    const quizid = +this.activateRoute.snapshot.paramMap.get("quizId");
    console.log(quizid)
    this.service.getQuestionByQuizId(quizid).subscribe((data=>{
      this.question = data;
      console.log(data)
    }));
  }

  GoToQuizes(){
    this.route.navigateByUrl("/quizlist")
  }

  GoToHome(){
    this.route.navigateByUrl("/admin")
  }

}
