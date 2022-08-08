import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Result } from '../common/result';
import { TotalResult } from '../common/total-result';

@Injectable({
  providedIn: 'root'
})
export class ResultserviceService {

  resulturl = "http://localhost:8080/api/result"
  constructor(private httpclient : HttpClient) { }

  getAllResults(): Observable<Result[]>{
    console.log(this.httpclient.get<getResultResponse>(this.resulturl).pipe(map(response => response._embedded.results)))
    return this.httpclient.get<getResultResponse>(this.resulturl).pipe(map(response => response._embedded.results))
  }

  getResultByUserId(userID:string): Observable<Result[]>{
    const resultbyuserIDUrl = "http://localhost:8080/api/result/search/findByUserID/?userID="+userID

    return this.httpclient.get<getResultResponse>(resultbyuserIDUrl).pipe(map(response => response._embedded.results))
  }


  getTotalResultByUserId(): Observable<TotalResult[]>{
    const resultbyuserIDUrl = "http://localhost:8080/api/result/search/findAllStudentResult"

    return this.httpclient.get<getResultTotalResponse>(resultbyuserIDUrl).pipe(map(response => response.total_res))
  }

  saveResult(result :Result):Observable<Result>{
    console.log(result)
    const ID = localStorage.getItem('id')
    const scor = sessionStorage.getItem('scr')
    const SCOR = + scor
    const qID = sessionStorage.getItem('qid')
    console.log(qID)
    const QID = +qID
  //  result = new Result(0,ID,QID,SCOR)
    console.log(QID)
    console.log(result)
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-origin' : '*'
      })
    };
    console.log(this.httpclient.post<Result>(this.resulturl,result,httpOptions))
    return this.httpclient.post<Result>(this.resulturl,result,httpOptions);
    }
}

interface getResultResponse {
  _embedded : {
    results : Result[]
  }
}

interface getResultTotalResponse {
 
    total_res : TotalResult[]
}
