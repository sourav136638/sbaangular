import { Injectable } from '@angular/core';
import { RestService } from '../services/rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskApiModel } from './model/task-api.model';
import { TaskModel } from '../models/task.model';
import { URLS } from '../constants/app-constant';
import { TaskModelTransformer } from './transformer/task.model.transformer';
import { IResponse } from '../models/common/common.model';
import { IApiResponse } from './model/common/common.model';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService extends RestService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getApiUrl(urlKey: string,...urlParam: string[]){
    urlParam.unshift(environment.user_uri);
    return this.getApiPath(urlKey,...urlParam);
  }

  getTaskList(): Observable<IResponse<TaskModel[]>> {
    return this.get(this.getApiUrl(URLS.PROJECT_LIST), {}).pipe(
      map(responseJson => {
        let response: IApiResponse<TaskApiModel[]> = responseJson;
        return response;
      })
    );
  }

  createTask(TaskModel: TaskModel): Observable<TaskModel> {
    console.log("inside rest", TaskModelTransformer.createTaskModelTransformer(TaskModel))
    return this.post(this.getApiUrl(URLS.TASK_CREATE), TaskModelTransformer.createTaskModelTransformer(TaskModel), {});

  }

  // getProjectById(id: string): Observable<TaskModel> {
  //   let TaskModel: TaskModel;
  //   return this.get(this.getApiUrl(URLS., id), {})
  //     .pipe(
  //       map(response => {
  //         //console.log("inside rest: response", response);
  //         TaskModel = TaskModelTransformer.userTransformer(response);
  //         //console.log("inside rest: userManagementAppModel", TaskModel);
  //         return TaskModel;
  //       })
  //     );
  // }

}

