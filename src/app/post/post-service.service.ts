import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getPostsTitle(): Observable<PostViewData[]> {
    return this.http.get<PostViewData[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id : number): Observable<PostData> {
    return this.http.get<PostData>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  removePost(postId: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}

export interface PostData
{
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostViewData
{
  id: number;
  title: string;
}
