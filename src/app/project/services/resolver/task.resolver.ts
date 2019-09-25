import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskService } from '../task.service';

@Injectable({
    providedIn: 'root'
  })

  export class TaskResolver implements Resolve<any> {
    constructor(private taskService: TaskService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //let id:string = route.paramMap.get('userId');
      return this.taskService.getTaskListPage;
    }
  
  }