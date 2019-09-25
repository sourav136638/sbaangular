import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProjectService } from '../project.service';

@Injectable({
    providedIn: 'root'
  })

  export class ProjectResolver implements Resolve<any> {
    constructor(private projectService: ProjectService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //let id:string = route.paramMap.get('userId');
      return this.projectService.getProjectListPage;
    }
  
  }