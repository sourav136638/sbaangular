import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { ProjectService } from '../../services/project.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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

  dataSource: MatTableDataSource<ProjectModel>

  subscriptions: Subscription[] = [];
  displayedColumns: string[];
  pageLength: number;
  selectManagerId: string;
  paramsData:any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  projectModel: ProjectModel[];

  constructor(private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router) {

      this.displayedColumns = [
        'project',
        'noOfTask',
        'startdate',
        'enddate',
        'completed'
      ];
  
      this.dataSource = new MatTableDataSource();

    
  }

  ngOnInit() {
    this.addProjectForm = this.formBuilder.group({
      project: ["", Validators.required],
      startdate: ["", Validators.required],
      enddate: ["", Validators.required],
      priority: ["", Validators.required],
      managerId: ["", Validators.required]
    });

    this.subscriptions.push(this.projectService.projectListDataSubject.asObservable().subscribe((data) => {
     
      this.dataSource.data = data;
      
    }));

    this.dataSource.sort = this.sort;
    const routeParams = this.route.snapshot.params;
    this.paramsData = routeParams;
    
    if(!this.selectManagerId){
      this.selectManagerId = this.paramsData.managerId;
    }
    

  }

  get project() { return this.addProjectForm.get('project'); }
  // get startDate() { return this.addProjectForm.get('startDate'); }
  // get endDate() { return this.addProjectForm.get('endDate'); }
  get priority() { return this.addProjectForm.get('priority'); }
  get managerId() { return this.addProjectForm.get('managerId'); }

  submit() {
    if (this.addProjectForm.valid) {
      let projectModel: ProjectModel = this.addProjectForm.value;
      this.projectService.updateProject(projectModel);
     
    } else {
      this.markAsTouched(this.addProjectForm);
    }
  }

  cancel() {
    this.router.navigate(['project/addProject']);
  }

}
