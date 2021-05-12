import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

   getBillingList(): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/view/all`)
   }
   deleteBill(id): Observable<any>{
     return this.http.get(`${environment.apiURL}/bill/${id}/delete`)
   }
   editBill(id,data): Observable<any> {
     return this.http.put(`${environment.apiURL}/bill/${id}/update`,data)
   }
   getBillDetail(id): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/${id}/getById`)
   }
   getTotalSale(): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/total`)
   }
}
