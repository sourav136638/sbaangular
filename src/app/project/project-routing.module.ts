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
import { ParentTaskResolver } from 'src/app/project/services/resolver/parent.resolver';
import { UpdateTaskComponent } from 'src/app/project/components/update-task/update-task.component';


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
      userList: UserResolver
    }
  },
  {
    path: 'addTask', component: AddTaskComponent,
    resolve: {
      taskList: TaskResolver,
      parentTaskList: ParentTaskResolver,
      projectList: ProjectResolver,
      userList: UserResolver
    }
  },
  {
    path: 'viewTask', component: ViewTaskComponent,
    resolve: {
      taskList: TaskResolver
    }
  },
  {
    path: 'editProject', component: UpdateProjectComponent,
    resolve: {
      taskList: TaskResolver,
      userList: UserResolver
    }
  },
  { path: 'editUser', component: UpdateUserComponent },
  { path: 'parentTask', component: ParentTaskComponent },
  {
    path: 'editTask', component: UpdateTaskComponent,
    resolve: {
      taskList: TaskResolver,
      projectList: ProjectResolver,
      userList: UserResolver,
      parentTaskList: ParentTaskResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
