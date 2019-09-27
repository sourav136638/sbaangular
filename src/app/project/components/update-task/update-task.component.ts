import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/task.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { TaskService } from 'src/app/project/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentTaskModel } from 'src/app/shared/models/parent-task.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/project/services/project.service';
import { UserService } from 'src/app/project/services/user.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[];
  displayedColumnsForProject: string[];
  userModel: MatTableDataSource<UserModel>;
  projectModel: MatTableDataSource<ProjectModel>;

  addTaskForm: FormGroup;

  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;
  subscriptions: Subscription[] = [];
  projectNames: any[];
  parentTasks: ParentTaskModel[];
  paramsData: any;

  //for bindining data
  selectUserId: string;
  selectProjectId: string;
  //closing popup
  close: boolean = true;


  constructor(private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: ActivatedRoute,
    private userService: UserService,
    private projectService: ProjectService,
    private route: Router,
  ) {


    this.displayedColumns = [
      'firstName',
      'lastName',
      'employeeId',
    ];

    this.displayedColumnsForProject = [
      'project',
      'noOfTask',
      'startdate',
      'enddate',
      'completed'
    ];

    this.userModel = new MatTableDataSource()
    this.projectModel = new MatTableDataSource()

  }

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      task: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      priority: ["", Validators.required],
      projectId: ["", Validators.required],
      userId: ["", Validators.required],
      parentTask: ["", Validators.required],
      parent: ["false"]
    });


    this.subscriptions.push(this.taskService.parentTaskListDataSubject.asObservable().subscribe((data) => {
      console.log("From Grid parent", data);
      this.parentTasks = data;
    }));

    this.subscriptions.push(this.userService.userListDataSubject.asObservable().subscribe((data) => {
      console.log("From Grid user", data);
      this.userModel.data = data;
    }));

    this.subscriptions.push(this.projectService.projectListDataSubject.asObservable().subscribe((data) => {
      console.log("From Grid project", data);
      this.projectModel.data = data;
    }));

    this.userModel.sort = this.sort;
    this.projectModel.sort = this.sort;

    const routeParams = this.router.snapshot.params;
    this.paramsData = routeParams;
    console.log("route",this.paramsData);
    if(!this.selectUserId){
      this.selectUserId = this.paramsData.userId;
    }
    if(!this.selectProjectId) {
      this.selectProjectId = this.paramsData.projectId;
    }

  }

  get startDate() { return this.addTaskForm.get('startDate'); }
  get endDate() { return this.addTaskForm.get('endDate'); }
  get priority() { return this.addTaskForm.get('priority'); }
  get projectId() { return this.addTaskForm.get('projectId'); }
  get parentTask() { return this.addTaskForm.get('parentTask'); }
  get userId() { return this.addTaskForm.get('userId'); }

  applyFilter(filterValue: string) {
    this.userModel.filter = filterValue.trim().toLowerCase();
    this.projectModel.filter = filterValue.trim().toLowerCase();
  }

  selectUser(row) {
    this.selectUserId = row.userId;
    console.log("userId", row.userId)
    this.close = false;
  }

  selectProject(row) {
    this.selectProjectId = row.projectId;
    console.log("projectId", this.selectProjectId);
  }


  submit() {
    if (this.addTaskForm.valid) {
      let taskModel: TaskModel = this.addTaskForm.value;
      this.taskService.createTask(taskModel);
      console.log('User', this.addTaskForm.value)
    } else {
      this.markAsTouched(this.addTaskForm);
    }

  }

  cancel() {
    this.route.navigate(['project/viewTask']);
  }
}
