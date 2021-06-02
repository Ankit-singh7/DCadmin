import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/admin/login`, data);
  }

  public changePassword(data):Observable<any> {
    return this.http.post(`${environment.apiURL}/admin/forgotPassword`,data)
  }

  public getAllUsers(perPage?:number,currentPage?:number): Observable<any> {
    return this.http.get(`${environment.apiURL}/users/view/all?per_page=${perPage}&current_page=${currentPage}`)
  }


}
