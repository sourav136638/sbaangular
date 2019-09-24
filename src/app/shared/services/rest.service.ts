import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonUtilsService } from '../util/common-utils.service';
import { REST_API_PATHS } from '../constants/app-constant';
import { String } from 'typescript-string-operations';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }

  getApiPath(urlKey: string,...urlParam: string[]){
    let apiObj = CommonUtilsService.copyJSON(REST_API_PATHS);    
    return _.extend(apiObj[urlKey],{rest: String.Format(apiObj[urlKey]["rest"], ...urlParam)});
  }

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
