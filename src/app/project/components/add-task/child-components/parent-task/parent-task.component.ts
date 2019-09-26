import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/task.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { TaskService } from 'src/app/project/services/task.service';

@Component({
  selector: 'app-parent-task',
  templateUrl: './parent-task.component.html',
  styleUrls: ['./parent-task.component.scss']
})
export class ParentTaskComponent implements OnInit {

  taskModel: TaskModel

  addTaskForm: FormGroup;

  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      task: ["", Validators.required],
      startDate: ["00000000"],
      endDate: ["00000000"],
      priority: ["null"],
      projectId: ["null"],
      userId: ["null"],
      parentTask: ["null"],
      parent: ["true"]
    });
  }

  get task() { return this.addTaskForm.get('task'); }

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
