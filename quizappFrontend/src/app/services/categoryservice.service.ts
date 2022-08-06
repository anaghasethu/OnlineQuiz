import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map} from 'rxjs';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  categoryUrl = "http://localhost:8080/api/category"

  constructor(private httpclient : HttpClient) { }

  getAllCategories(): Observable<Category[]>{
    console.log(this.httpclient.get<getCategoryResponse>(this.categoryUrl).pipe(map(response => response._embedded.categories)))
    return this.httpclient.get<getCategoryResponse>(this.categoryUrl).pipe(map(response => response._embedded.categories))
  // return this.httpclient.get<Category>(this.categoryUrl);
  }
}

interface getCategoryResponse {
  _embedded : {
    categories : Category[]
  }
}
