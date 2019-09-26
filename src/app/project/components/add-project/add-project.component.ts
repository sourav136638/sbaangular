import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  projectModel: ProjectModel[];
  addProjectForm: FormGroup;


  marked = false;
  visibled = true;
  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;

  managers: any[];
  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private route: ActivatedRoute) {
    this.managers = [
      { "id": 1, "value": "manager1" }
    ];

    // this.route.data.subscribe((data) => {
    //   this.projectModel = data.projectList;
    //   console.log('list', this.projectModel);
    // });
  }

  changeTask(e) {
    this.marked = e.target.checked;
    
  }

  ngOnInit() {

    if(this.marked)
    {
      this.addProjectForm = this.formBuilder.group({
        project: ["", Validators.required],
        priority: ["", Validators.required],
        managerId: ["", Validators.required]
      });
    } else {
      this.addProjectForm = this.formBuilder.group({
        project: ["", Validators.required],
        priority: ["", Validators.required],
        managerId: ["", Validators.required],
        startdate: ["", Validators.required],
        enddate: ["", Validators.required]
        
        
      });
    }
    
  }

  get project() { return this.addProjectForm.get('project'); }
  get startdate() { return this.addProjectForm.get('startdate'); }
  get enddate() { return this.addProjectForm.get('enddate'); }
  get priority() { return this.addProjectForm.get('priority'); }
  get managerId() { return this.addProjectForm.get('managerId'); }

  submit() {
    if (this.addProjectForm.valid) {
      let projectModel: ProjectModel = this.addProjectForm.value;
      this.projectService.createProject(projectModel);
      console.log('User', this.addProjectForm.value)
    } else {
      this.markAsTouched(this.addProjectForm);
    }
  }

  resetProject() {
    this.addProjectForm.reset();
  }

}
