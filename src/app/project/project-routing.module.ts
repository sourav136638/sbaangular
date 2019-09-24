import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ParentTaskComponent } from './components/add-task/child-components/parent-task/parent-task.component';


const routes: Routes = [
  { path: '', component: AddUserComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'addProject', component: AddProjectComponent},
  { path: 'addTask', component: AddTaskComponent},
  { path: 'viewTask', component: ViewTaskComponent},
  { path: 'editProject', component: UpdateProjectComponent},
  { path: 'editUser', component: UpdateUserComponent},
  { path: 'parentTask', component: ParentTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
