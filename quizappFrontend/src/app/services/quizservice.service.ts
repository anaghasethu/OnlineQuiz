import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map} from 'rxjs';
import { Quiz } from '../common/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  quizurl="http://localhost:8080/api/quiz"

  constructor(private  httpclient : HttpClient) { }

  getAllQuizes(): Observable<Quiz[]>{
    console.log(this.httpclient.get<getQuizResponse>(this.quizurl).pipe(map(response => response._embedded.quizzes)))
    return this.httpclient.get<getQuizResponse>(this.quizurl).pipe(map(response => response._embedded.quizzes))
  }

  getQuizByCategory(categoryName : string) : Observable<Quiz[]>{
    const quizbycatUrl = "http://localhost:8080/api/quiz/search/findByCategoryNameIgnoreCase/?categoryName="+categoryName

    return this.httpclient.get<getQuizResponse>(quizbycatUrl).pipe(map(response => response._embedded.quizzes))
  }
} 




interface getQuizResponse {
  _embedded : {
    quizzes : Quiz[]
  }
}

