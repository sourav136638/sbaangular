import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProjectManagerLayoutComponent } from './components/layout/project-manager-layout/project-manager-layout.component';
import { RouterModule } from '@angular/router';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { DialogTemplateComponent } from './components/dialogs/dialog-template/dialog-template.component';
import 'hammerjs';



@NgModule({
  declarations: [HeaderComponent, ProjectManagerLayoutComponent, FieldErrorDisplayComponent,
    DialogTemplateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    FieldErrorDisplayComponent
  ],
  entryComponents: [
    DialogTemplateComponent
  ]
})
export class SharedModule { }
