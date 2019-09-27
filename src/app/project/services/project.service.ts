import { Injectable } from '@angular/core';
import { DIALOG_MODE } from 'src/app/shared/constants/app-constant';
import { MESSAGE, MODE } from 'src/app/shared/constants/message-constants';
import { BehaviorSubject } from 'rxjs';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { Router } from '@angular/router';
import { DialogUtilService } from 'src/app/shared/components/dialogs/dialog-util.service';
import { ProjectApiService } from 'src/app/shared/rest-api/project-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public projectListDataSubject: BehaviorSubject<ProjectModel[]> = new BehaviorSubject<ProjectModel[]>([]);
  constructor(private restApi: ProjectApiService, private route: Router,
    private dialogService: DialogUtilService) { }

  createProject(projectModel: ProjectModel) {
    this.loading.next(true);
    this.restApi.createProject(projectModel).subscribe((response) => {
      this.loading.next(false);
      //this.openUserDialog(MODE.SUCCESS, MESSAGE.);
      this.getProjectListPage();
    }, (error => {
      this.loading.next(false);
      console.error(error);
      // this.openUserDialog(MODE.ERROR, MESSAGE.USER_CREATE_ERROR);
    }));
  }

  public getProjectListPage() {
    this.loading.next(true);

    this.restApi.getProjectList().subscribe((response: any) => {
      //Trigger page data
      this.projectListDataSubject.next(response);
      //stop loader
      this.loading.next(false);
    }, (error => {
      this.loading.next(false);
      console.error(error);
    }));
  }

  updateProject(projectModel: ProjectModel) {
    this.loading.next(true);
    this.restApi.updateProject(projectModel).subscribe((response) => {
      this.loading.next(false);
      // this.openUserDialog(DIALOG_MODE.SUCCESS, MESSAGE.);
    }, (error => {
      this.loading.next(false);
      console.error(error);
      //this.openUserDialog(DIALOG_MODE.ERROR, MESSAGE.);
    }));
  }

  openUserDialog(mode: string, message: string): void {
    this.dialogService.openModal(DIALOG_MODE.SUCCESS, mode, message, () => {
     
    }, () => {
     
    });
  }
}
