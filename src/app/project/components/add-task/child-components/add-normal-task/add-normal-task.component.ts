import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/task.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { TaskService } from 'src/app/project/services/task.service';

@Component({
  selector: 'app-add-normal-task',
  templateUrl: './add-normal-task.component.html',
  styleUrls: ['./add-normal-task.component.scss']
})
export class AddNormalTaskComponent implements OnInit {

  taskModel: TaskModel

  addTaskForm: FormGroup;

  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;

  projectNames: any[];
  parentTasks: any[];
  users: any[];

    constructor(private formBuilder: FormBuilder, private taskService: TaskService) { 
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

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      task: ["null"],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      priority: ["", Validators.required],
      projectId: ["", Validators.required],
      userId: ["", Validators.required],
      parentTask: ["", Validators.required],
      parent: ["false"]
    });
  }

  
  
  get startDate() { return this.addTaskForm.get('startDate'); }
  get endDate() { return this.addTaskForm.get('endDate'); }
  get priority() { return this.addTaskForm.get('priority'); }
  get projectId() { return this.addTaskForm.get('projectId'); }
  get parentTask() { return this.addTaskForm.get('parentTask'); }
  get userId() { return this.addTaskForm.get('userId'); }

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
