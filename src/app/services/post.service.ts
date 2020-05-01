import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from 'src/app/article/article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postListJson = `[
    {
      "title": "test",
      "link": "www.test.com",
      "votes": 5
    },
    {
      "title": "test2",
      "link": "www.test2.com",
      "votes": 10
    }
  ]`;
  
  private readonly URL = ``; // url to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  postList: Article[];

  constructor(private http: HttpClient) { 
    this.postList = JSON.parse(this.postListJson);
  }

  public getPosts(): Observable<Article[]> {
    return this.http.get<Article[]>(this.URL);
  }
}
