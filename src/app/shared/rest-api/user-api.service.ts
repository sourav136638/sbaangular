import { Injectable } from '@angular/core';
import { RestService } from '../services/rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends RestService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getApiUrl(urlKey: string,...urlParam: string[]){
    urlParam.unshift(environment.user_uri);
    //return this.getApiPath(urlKey,...urlParam);
  }

}
