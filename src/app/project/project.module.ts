import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UserGridComponent } from './components/add-user/child-components/user-grid/user-grid.component';
import { ProjectGridComponent } from './components/add-project/child-components/project-grid/project-grid.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ParentTaskComponent } from './components/add-task/child-components/parent-task/parent-task.component';
import { AddNormalTaskComponent } from './components/add-task/child-components/add-normal-task/add-normal-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

//import { NgbModule, NgbDateAdapter, NgbNativeDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddProjectComponent, AddTaskComponent, AddUserComponent, ViewTaskComponent, UserGridComponent, ProjectGridComponent, UpdateProjectComponent, UpdateUserComponent, ParentTaskComponent, AddNormalTaskComponent, UpdateTaskComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  // providers: [
  //   provide: [{NgbDateAdapter, useclass:NgbNativeDateAdapter}]
  // ]
})
export class ProjectModule { }
