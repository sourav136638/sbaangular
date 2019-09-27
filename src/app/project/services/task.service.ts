import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from 'src/app/shared/models/task.model';
import { Router } from '@angular/router';
import { DialogUtilService } from 'src/app/shared/components/dialogs/dialog-util.service';
import { TaskApiService } from 'src/app/shared/rest-api/task-api.service';
import { DIALOG_MODE } from 'src/app/shared/constants/app-constant';
import { ParentTaskModel } from 'src/app/shared/models/parent-task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public taskListDataSubject: BehaviorSubject<TaskModel[]> = new BehaviorSubject<TaskModel[]>([]);
  public parentTaskListDataSubject: BehaviorSubject<ParentTaskModel[]> = new BehaviorSubject<ParentTaskModel[]>([]);
  constructor(private restApi: TaskApiService, private route: Router,
    private dialogService: DialogUtilService) { }

  createTask(taskModel: TaskModel) {
    this.loading.next(true);
    this.restApi.createTask(taskModel).subscribe((response) => {
      this.loading.next(false);
      //this.openUserDialog(MODE.SUCCESS, MESSAGE.);
      this.getTaskListPage();
    }, (error => {
      this.loading.next(false);
      console.error(error);
      // this.openUserDialog(MODE.ERROR, MESSAGE.USER_CREATE_ERROR);
    }));
  }

  public getTaskListPage() {
    this.loading.next(true);
    // return this.restApi.getTaskList();
    this.restApi.getTaskList().subscribe((response: any) => {
      //Trigger page data
      this.taskListDataSubject.next(response);
      //stop loader
      this.loading.next(false);
    }, (error => {
      this.loading.next(false);
      console.error(error);
    }));
  }

  public getParentTaskListPage() {
    this.loading.next(true);
    // return this.restApi.getTaskList();
    this.restApi.getParentTaskList().subscribe((response: any) => {
      //Trigger page data
      this.parentTaskListDataSubject.next(response);

      //stop loader
      this.loading.next(false);
    }, (error => {
      this.loading.next(false);
      console.error(error);
    }));
  }


  updateTask(taskModel: TaskModel) {
    this.loading.next(true);
    this.restApi.updateTask(taskModel).subscribe((response) => {
      this.loading.next(false);
      //this.openUserDialog(DIALOG_MODE.SUCCESS, MESSAGE.USER_UPDATE_SUCCESS);
    }, (error => {
      this.loading.next(false);
      console.error(error);
      //this.openUserDialog(DIALOG_MODE.ERROR, MESSAGE.USER_UPDATE_ERROR);
    }));
  }

  deleteTask(taskId: string) {
    //console.log('delete', userId);
    this.loading.next(true);
    this.restApi.deleteTaskById(taskId).subscribe((response) => {
      this.loading.next(false);
      //this.openUserDialog();
      //this.openUserDialog(DIALOG_MODE.SUCCESS, MESSAGE.USER_DELETE_SUCCESS);
      this.route.navigate(['project/viewTask']);
      this.getTaskListPage();
    }, (error => {
      this.loading.next(false);
      console.error(error);
      //this.openUserDialog(DIALOG_MODE.ERROR, MESSAGE.USER_DELETE_ERROR);
    }));
  }


  openUserDialog(mode: string, message: string): void {
    this.dialogService.openModal(DIALOG_MODE.SUCCESS, mode, message, () => {
      //confirmed
      console.log('Yes');
      //this.route.navigate(['/project/addUser']);
    }, () => {
      //not confirmed
      console.log('No');
      //this.route.navigate(['/project/addUser']);
    });
  }
}
