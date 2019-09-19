import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';


const routes: Routes = [
  { path: '', component: AddUserComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'addProject', component: AddProjectComponent},
  { path: 'addTask', component: AddTaskComponent},
  { path: 'viewTask', component: ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
