import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../post.models';
import { StorageService } from '../../../storage.service';


export interface PostDTO {
  id: number;
  name: string;
  content: string;
  postedBy: string;
  date: Date;
  approved: boolean;
  posted: boolean;
  byteImg: string;
  categoryId: number;
}

@Injectable({
  providedIn: 'root'
})
export class LatestService {


  private SERVER_URL = "http://localhost:8081/api/customer/";

  constructor(private http: HttpClient) { }

  // Ajoutez la méthode pour récupérer les catégories postées par l'admin
  getApprovedAndPostedPosts(): Observable<Post[]> {
    const url = `${this.SERVER_URL}approved-and-posted-posts`;
    return this.http.get<Post[]>(url);
  }
  getAllCategories(): Observable<any>{
    return this.http.get(this.SERVER_URL+ "cats",{
      headers: this.createAuthorizationHeader(),
    })
  }


  getPostsByCategory(categoryId: number): Observable<PostDTO[]> {
    return this.http.get<PostDTO[]>(`${this.SERVER_URL}posts/category/${categoryId}`);
  }
  // Ajoutez la méthode pour récupérer les catégories postées par l'admin


private createAuthorizationHeader(): HttpHeaders {
  return new HttpHeaders().set('Authorization', 'Bearer ' + StorageService.getToken());
}
}