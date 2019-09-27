import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskService } from '../task.service';

@Injectable({
    providedIn: 'root'
})

export class ParentTaskResolver implements Resolve<any> {
    constructor(private taskService: TaskService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.taskService.getParentTaskListPage();
    }

}