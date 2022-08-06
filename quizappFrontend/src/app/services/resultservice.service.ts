import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Result } from '../common/result';

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

  saveResult(result :Result):Observable<Result>{
    console.log(result)
    localStorage.setItem('Result',JSON.stringify(result));
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
