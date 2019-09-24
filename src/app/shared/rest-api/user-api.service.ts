import { Injectable } from '@angular/core';
import { RestService } from '../services/rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { URLS } from '../constants/app-constant';
import { UserModelTransformer } from './transformer/user.model.transformer';
import { IApiResponse } from './model/common/common.model';
import { UserApiModel } from './model/user-api.model';
import { map, switchMap } from 'rxjs/operators';
import { IResponse } from '../models/common/common.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends RestService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getApiUrl(urlKey: string, ...urlParam: string[]) {
    urlParam.unshift(environment.user_uri);
    return this.getApiPath(urlKey, ...urlParam);
  }

  getUserList(): Observable<IResponse<UserModel[]>> {
    return this.get(this.getApiUrl(URLS.GET_USER_LIST), {}).pipe(
      map(responseJson => {
        let response: IApiResponse<UserApiModel[]> = responseJson;
        console.log("userList",response);
        return response;
      })
    );
  }

  createUser(userModel: UserModel): Observable<UserModel> {
    console.log("api service", UserModelTransformer.createUserModelTransformer(userModel));
    return this.post(this.getApiUrl(URLS.ADD_USER),
      UserModelTransformer.createUserModelTransformer(userModel), {});

  }

  // getUserById(id: string): Observable<UserModel> {
  //   let userModel: UserModel;
  //   return this.get(this.getApiUrl(URLS.GET_USER_MANAGEMENT, id), {})
  //     .pipe(
  //       map(response => {
  //         //console.log("inside rest: response", response);
  //         userModel = UserModelTransformer.userTransformer(response);
  //         //console.log("inside rest: userManagementAppModel", userModel);
  //         return userModel;
  //       })
  //     );
  // }

  updateUser(userModel: UserModel): Observable<UserModel> {
    let userApiModel: UserApiModel = UserModelTransformer.updateUserModelTransformer(userModel);
    return this.post(this.getApiUrl(URLS.UPDATE_USER, userModel.userId), userApiModel, {});
  }

  deleteUserByUserId(userId: string): Observable<any> {
    return this.delete(this.getApiUrl(URLS.DELETE_USER, userId), {});
  }

}
