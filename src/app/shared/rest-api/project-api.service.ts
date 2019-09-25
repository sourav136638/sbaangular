import { Injectable } from '@angular/core';
import { RestService } from '../services/rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../models/project.model';
import { IResponse } from '../models/common/common.model';
import { Observable } from 'rxjs';
import { URLS } from '../constants/app-constant';
import { map } from 'rxjs/operators';
import { ProjectApiModel } from './model/project-api.model';
import { IApiResponse } from './model/common/common.model';
import { ProjectModelTransformer } from './transformer/project.model.transformer';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService extends RestService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getApiUrl(urlKey: string,...urlParam: string[]){
    urlParam.unshift(environment.user_uri);
    return this.getApiPath(urlKey,...urlParam);
  }

  getProjectList(): Observable<any[]> {
    return this.get(this.getApiUrl(URLS.PROJECT_LIST), {}).pipe(
      map(responseJson => {
        let response: ProjectModel[] = responseJson;
        return response;
      })
    );
  }

  createProject(ProjectModel: ProjectModel): Observable<ProjectModel> {
    return this.post(this.getApiUrl(URLS.PROJECT_CREATE), ProjectModelTransformer.createProjectModelTransformer(ProjectModel), {});

  }

  // getProjectById(id: string): Observable<ProjectModel> {
  //   let projectModel: ProjectModel;
  //   return this.get(this.getApiUrl(URLS., id), {})
  //     .pipe(
  //       map(response => {
  //         //console.log("inside rest: response", response);
  //         ProjectModel = ProjectModelTransformer.userTransformer(response);
  //         //console.log("inside rest: userManagementAppModel", ProjectModel);
  //         return ProjectModel;
  //       })
  //     );
  // }

  updateProject(ProjectModel: ProjectModel): Observable<ProjectModel> {
    let projectApiModel: ProjectApiModel = ProjectModelTransformer.updateProjectModelTransformer(ProjectModel);
    return this.post(this.getApiUrl(URLS.UPDATE_PROJECT, ProjectModel.projectId), projectApiModel, {});
  }

  deleteProjectByUserId(projectId: string): Observable<any> {
    return this.delete(this.getApiUrl(URLS.DELETE_PROJECT, projectId), {});
  }

}
