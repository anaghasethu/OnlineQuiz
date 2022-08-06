import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , map} from 'rxjs';
import { Question } from '../common/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  questionurl = "http://localhost:8080/api/question"

  constructor(private httpclient : HttpClient) { }

  getAllQuestions(): Observable<Question[]>{
    console.log(this.httpclient.get<getQuestionResponse>(this.questionurl).pipe(map(response => response._embedded.questions)))
    return this.httpclient.get<getQuestionResponse>(this.questionurl).pipe(map(response => response._embedded.questions))
  }

  getQuestionByQuizId(quizid : Number): Observable<Question[]>{

    const questionByQuizId="http://localhost:8080/api/question/search/findByQuizID/?quizID="+quizid
    console.log(this.httpclient.get<getQuestionResponse>(questionByQuizId).pipe(map(response => response._embedded.questions)))
    return this.httpclient.get<getQuestionResponse>(questionByQuizId).pipe(map(response => response._embedded.questions))
  }
}

interface getQuestionResponse {
  _embedded : {
    questions : Question[]
  }
}

