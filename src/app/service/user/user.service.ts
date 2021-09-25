import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public role =  new BehaviorSubject(null);


  constructor(private http: HttpClient) { 
    this.role.next(localStorage.getItem('role'))
  }
  

  public login(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/admin/login`, data);
  }

  public changePassword(data):Observable<any> {
    return this.http.post(`${environment.apiURL}/admin/forgotPassword`,data)
  }

  public getAllUsers(perPage?:number,currentPage?:number): Observable<any> {
    return this.http.get(`${environment.apiURL}/users/view/all?per_page=${perPage}&current_page=${currentPage}`)
  }


  setRole(val) {
    localStorage.setItem('role', val);
    this.role.next(val);
  }
  
  getRole(){
    return this.role.asObservable();
  }


}
