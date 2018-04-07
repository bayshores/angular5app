import {Injectable} from '@angular/core';
import {Post} from "../models/Post";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}
@Injectable()
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.postsUrl)
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl,post,httpOptions);
  }

  update(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(url,post,httpOptions);
  }

  delete(post:Post|number): Observable<Post> {
    const id = typeof post == 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url,httpOptions);
  }

  get(id:number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }
}
