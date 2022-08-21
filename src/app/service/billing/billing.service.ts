import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

   getBillingList(perPage?:number,currentPage?:number,paramObj?:any): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/view/all?per_page=${perPage}&current_page=${currentPage}&${paramObj}`)
   }
   getSalesReport(paramObj?:any): Observable<any> {
    return this.http.get(`${environment.apiURL}/bill/view/all?${paramObj}`)
  }
   deleteBill(id): Observable<any>{
     return this.http.get(`${environment.apiURL}/bill/${id}/delete`)
   }
   editBill(id,data): Observable<any> {
     return this.http.post(`${environment.apiURL}/bill/${id}/update`,data)
   }
   getBillDetail(id): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/${id}/getById`)
   }
   getTotalSale(paramObj?:any): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/total?${paramObj}`)
   }

   getDiscount(): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/get_discount`)
   }

   updateDiscount(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/bill/update_discount`,data)
   }
}
