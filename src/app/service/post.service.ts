import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(`https://jsonplaceholder.typicode.com/posts`);
  }

  createPost(post: IPost): Observable<IPost> {
    console.log(post)
    return this.http.post<IPost>(`https://jsonplaceholder.typicode.com/posts`, post)
  }
}
