import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserResponse } from '../model/userResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = '/users/';

  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<UserResponse> {
    return this.http.get<UserResponse>(this.baseUrl, httpOptions);
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.baseUrl + id, httpOptions);
  }

  addUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseUrl, user, httpOptions);
  }
  
  updateUser(user: User): Observable<UserResponse> {
    return this.http.put<UserResponse>(this.baseUrl + user.userId, user, httpOptions);
  }

  deleteUser(id: number): Observable<UserResponse> {
    return this.http.delete<UserResponse>(this.baseUrl + id);
  }
}
