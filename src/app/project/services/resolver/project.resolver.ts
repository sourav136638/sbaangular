import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProjectService } from '../project.service';
import { ProjectModel } from 'src/app/shared/models/project.model';

@Injectable({
    providedIn: 'root'
  })

  export class ProjectResolver implements Resolve<any> {
    constructor(private projectService: ProjectService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //let element:ProjectModel[] = route.paramMap.get('element');
      return this.projectService.getProjectListPage();
    }
  
  }