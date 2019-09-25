import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ParentTaskComponent } from './components/add-task/child-components/parent-task/parent-task.component';
import { UserResolver } from './services/resolver/user.resolver';
import { ProjectResolver } from './services/resolver/project.resolver';
import { TaskResolver } from './services/resolver/task.resolver';


const routes: Routes = [
  { path: '', component: AddUserComponent },
  {
    path: 'addUser', component: AddUserComponent,
    resolve: {
      userList: UserResolver
    }
  },
  {
    path: 'addProject', component: AddProjectComponent,
    resolve: {
      projectList: ProjectResolver
    }
  },
  {
    path: 'addTask', component: AddTaskComponent,
    resolve: {
      taskList: TaskResolver
    }
  },
  {
    path: 'viewTask', component: ViewTaskComponent,
    resolve: {
      taskList: TaskResolver
    }
  },
  { path: 'editProject', component: UpdateProjectComponent },
  { path: 'editUser', component: UpdateUserComponent },
  { path: 'parentTask', component: ParentTaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
