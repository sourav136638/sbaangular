import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  addProjectForm: FormGroup;

  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;

  managers: any[];
  constructor(private formBuilder: FormBuilder,private projectService:ProjectService) {
    this.managers = [
      { "id": 1, "value": "manager1" }
    ];
  }

  ngOnInit() {
    this.addProjectForm = this.formBuilder.group({
      project: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      priority: ["", Validators.required],
      managerId: ["", Validators.required]
    });
  }

  get project() { return this.addProjectForm.get('project'); }
  get startDate() { return this.addProjectForm.get('startDate'); }
  get endDate() { return this.addProjectForm.get('endDate'); }
  get priority() { return this.addProjectForm.get('priority'); }
  get managerId() { return this.addProjectForm.get('managerId'); }

  submit() {
    if (this.addProjectForm.valid) {
      let projectModel: ProjectModel = this.addProjectForm.value;
      this.projectService.updateProject(projectModel);
      console.log('User', this.addProjectForm.value)
    } else {
      this.markAsTouched(this.addProjectForm);
    }
  }

}
