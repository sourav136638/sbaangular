import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { ProjectService } from '../../services/project.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/project/services/user.service';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  addProjectForm: FormGroup;


  marked = false;
  visibled = true;
  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;
  userModel: MatTableDataSource<UserModel>;

  subscriptions: Subscription[] = [];
  displayedColumns: string[];
  pageLength: number;
  selectManagerId: string;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: ActivatedRoute) {
    this.displayedColumns = [
      'firstName',
      'lastName',
      'employeeId',
    ];

    this.userModel = new MatTableDataSource();

  }

  changeTask(e) {
    this.marked = e.target.checked;

  }

  ngOnInit() {


    if (this.marked) {
      this.addProjectForm = this.formBuilder.group({
        project: ["", Validators.required],
        priority: ["", Validators.required],
        managerId: [this.selectManagerId, Validators.required],
        startdate: ["", Validators.required],
        enddate: ["", Validators.required]
      });
    } else {
      this.addProjectForm = this.formBuilder.group({
        project: ["", Validators.required],
        priority: ["", Validators.required],
        managerId: [this.selectManagerId, Validators.required],
        startdate: [""],
        enddate: [""]
      });

      this.userModel = new MatTableDataSource()
    }

    this.subscriptions.push(this.userService.userListDataSubject.asObservable().subscribe((data) => {

      this.userModel.data = data;
    }));
    this.userModel.sort = this.sort;

  }

  get project() { return this.addProjectForm.get('project'); }
  // get startdate() { return this.addProjectForm.get('startdate'); }
  // get enddate() { return this.addProjectForm.get('enddate'); }
  get priority() { return this.addProjectForm.get('priority'); }
  get managerId() { return this.addProjectForm.get('managerId'); }

  submit() {
    if (this.addProjectForm.valid) {
      let projectModel: ProjectModel = this.addProjectForm.value;
      this.projectService.createProject(projectModel);
    } else {
      this.markAsTouched(this.addProjectForm);
    }
  }

  resetProject() {
    this.addProjectForm.reset();
  }

  selectUser(row) {
    if (!this.selectManagerId) {
      this.selectManagerId = row.userId;
      console.log("userId", this.selectManagerId)
    }


  }

}
