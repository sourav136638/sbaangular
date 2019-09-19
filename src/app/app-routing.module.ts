import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagerLayoutComponent } from './shared/components/layout/project-manager-layout/project-manager-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectManagerLayoutComponent,
    children: [
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
