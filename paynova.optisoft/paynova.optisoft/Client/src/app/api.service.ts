import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'withCredentials': 'true',
    //'Authorization': 'Basic ' + btoa('3660466:039774fe3ba03e97b92a336961d168ae')
    'Authorization': 'Basic ' + btoa('18599062:67dbe3d5a25f95367089ae52861d1c3e')
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private paynovaapilink= '/addresses/SE/';
  // private orderapilink= '/orders/';
  // private apilink= 'https://localhost:44343/api/orders/';
  private apilink = 'https://portal.advea.se/api/orders/';
  private paynovaapilink = 'https://paynova.optisoftab.se/proxy/proxy.ashx?https://api.paynova.com/';
  constructor(private http: HttpClient) {

  }
  generatepaynovadata(data: any):Observable<any> {
    return this.http.post<any>(this.apilink + 'genrateorderforpaynova', data);
  }
  Login(data: any):Observable<any> {
    return this.http.post<any>(this.apilink + 'login', data);
  }
  // Live Links
  getcustomerdata(cid: any):Observable<any> {
    return this.http.get<any>(this.paynovaapilink + 'addresses/SE/' + cid, httpOptions);
  }
  paynovacreateorder(orderdata: any):Observable<any> {
    return this.http.post<any>(this.paynovaapilink + 'orders/create', orderdata, httpOptions);
  }
  authorizeorder(ordernumber: string, orderdata: any):Observable<any> {
    return this.http.post<any>(this.paynovaapilink + 'orders/' + ordernumber + '/authorizePayment', orderdata, httpOptions);
  }
  // initializationpayment(ordernumber:string,paymentoption:any): Observable<any>{
  //   return this.http.post<any>(this.orderapilink+ ordernumber +'/authorizePayment',orderdata,httpOptions);
  //   //return this.http.post<any>(this.paynovaapilink+'/orders/' + ordernumber +'/initializePayment',paymentoption,httpOptions);
  // }
  finalizeorder(ordernumber: string, transactionnumber: string, total: number):Observable<any> {
    return this.http.post<any>(this.paynovaapilink + 'orders/' + ordernumber + '/transactions/' + transactionnumber + '/finalize/' + total, httpOptions);
  }

  // Local Links
  // getcustomerdata(cid: any):Observable<any> {
  //   return this.http.get<any>(this.paynovaapilink + cid, httpOptions);
  // }
  // paynovacreateorder(orderdata: any):Observable<any> {
  //   return this.http.post<any>(this.orderapilink + 'create', orderdata, httpOptions);
  // }
  // authorizeorder(ordernumber: string, orderdata: any):Observable<any> {
  //   return this.http.post<any>(this.orderapilink  + ordernumber + '/authorizePayment', orderdata, httpOptions);
  // }
  
  // finalizeorder(ordernumber: string, transactionnumber: string, total: number):Observable<any> {
  //   return this.http.post<any>(this.orderapilink + ordernumber + '/transactions/' + transactionnumber + '/finalize/' + total, httpOptions);
  // }
}
