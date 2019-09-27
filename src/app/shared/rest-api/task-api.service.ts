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
import { ParentTaskModel } from 'src/app/shared/models/parent-task.model';
import { ParentTaskApiModel } from 'src/app/shared/rest-api/model/parent-task-api.model';

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
    return this.get(this.getApiUrl(URLS.TASK_LIST), {}).pipe(
      map(responseJson => {
        let response: IApiResponse<TaskApiModel[]> = responseJson;
        console.log("TaskList",response)
        return response;
      })
    );
  }

  getParentTaskList(): Observable<IResponse<ParentTaskModel[]>> {
    return this.get(this.getApiUrl(URLS.GET_PARENT_TASK), {}).pipe(
      map(responseJson => {
        let response: IApiResponse<ParentTaskApiModel[]> = responseJson;
        console.log("Parent TaskList",response)
        return response;
      })
    );
  }

  createTask(TaskModel: TaskModel): Observable<TaskModel> {
    console.log("inside rest", TaskModelTransformer.createTaskModelTransformer(TaskModel))
    return this.post(this.getApiUrl(URLS.TASK_CREATE), TaskModelTransformer.createTaskModelTransformer(TaskModel), {});

  }

updateTask(taskModel:TaskModel): Observable<TaskModel> {
  let taskApiModel: TaskApiModel = TaskModelTransformer.updateTaskModelTransformer(taskModel);
  return this.post(this.getApiUrl(URLS.TASK_UPDATE, taskModel.taskId), taskApiModel, {});
}

deleteTaskById(taskId: string): Observable<any> {
  return this.put(this.getApiUrl(URLS.END_TASK, taskId), "","");
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

