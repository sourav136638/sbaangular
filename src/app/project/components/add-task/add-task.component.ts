import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { TaskModel } from 'src/app/shared/models/task.model';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskModel: TaskModel

  addTaskForm: FormGroup;
  marked = false;
  isvisibled = false;
  visibled = true;

  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;

  projectNames: any[];
  parentTasks: any[];
  users: any[];
  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private route: Router, private router: ActivatedRoute) {
    this.users = [
      { "id": 1, "value": "Ram" }
    ];
    this.projectNames = [
      { "id": 2, "value": "project1" }
    ];
    this.parentTasks = [
      { "id": 1, "value": "Task1" }
    ]
  }

  changeTask(e) {
    this.marked = e.target.checked;
    // if (this.isvisibled == true) {
    //   this.isvisibled = false;
    // } else {
    //   this.isvisibled = true;
    // }
    // if (this.visibled == false) {
    //   this.visibled = true;
    // } else {
    //   this.visibled = false;
    // }
  }

  ngOnInit() {

    // this.router.data.subscribe((data) => {
    //   this.taskModel = data.taskList;
    //   console.log('list', this.taskModel);
    // });

    this.addTaskForm = this.formBuilder.group({
      task: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      priority: ["", Validators.required],
      projectId: ["", Validators.required],
      userId: ["", Validators.required],
      parentTask: ["", Validators.required],
      parent: ["", Validators.required]
    });
  }

  // get taskName() { return this.addTaskForm.get('taskName'); }
  // get startDate() { return this.addTaskForm.get('startDate'); }
  // get endDate() { return this.addTaskForm.get('endDate'); }
  // get priority() { return this.addTaskForm.get('priority'); }
  // get projectId() { return this.addTaskForm.get('projectId'); }
  // get parentTask() { return this.addTaskForm.get('parentTask'); }
  // get parent() { return this.addTaskForm.get('parent'); }

  // get verifyOption() { return this.addTaskForm.get('verifyOption'); }
  // get verifierAction() { return this.addTaskForm.get('verifierAction'); }

  // private showVerifyAction(status: boolean): void {
  //   if (status) {
  //     this.verifierAction.setValidators(Validators.required);
  //   } else {
  //     this.verifierAction.setValidators([]);
  //   }
  //   this.verifierAction.reset();
  // }



  submit() {
    if (this.addTaskForm.valid) {
      let taskModel: TaskModel = this.addTaskForm.value;
      this.taskService.createTask(taskModel);
      console.log('User', this.addTaskForm.value)
    } else {
      this.markAsTouched(this.addTaskForm);
    }

  }

  resetTask() {
    this.addTaskForm.reset();
  }

}
