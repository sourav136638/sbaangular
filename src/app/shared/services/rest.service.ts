import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }

  getUrl(urlObj: any): any {
    const _url: string = urlObj.rest;
    return _url;
  }

  get(url, params):Observable<any> {
    return this.http.get(this.getUrl(url), params);
  }

  post(url, data, params):Observable<any> {    
    return this.http.post(this.getUrl(url), data, params);
  }

  delete(url, params):Observable<any> {
    return this.http.delete(this.getUrl(url), params);
  }

  put(url, data, params):Observable<any> {
    return this.http.put(this.getUrl(url), data, params);
  }

}
