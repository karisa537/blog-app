import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://your-api-url.com/posts';

  // private posts = [
  //   {id: 1, title: 'Blog post 1', content: 'Content of blog on1'},
  //   {id: 1, title: 'Blog post 1', content: 'Content of blog on1'},
  //   {id: 1, title: 'Blog post 1', content: 'Content of blog on1'}
  // ];

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
