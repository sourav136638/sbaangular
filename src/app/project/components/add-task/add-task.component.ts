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


  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private route: Router, private router: ActivatedRoute) {

  }

  changeTask(e) {
    this.marked = e.target.checked;
    if (this.visibled == false) {
      this.visibled = true;
    } else {
      this.visibled = false;
    }
  }

  ngOnInit() {

    // this.router.data.subscribe((data) => {
    //   this.taskModel = data.taskList;
    //   console.log('list', this.taskModel);
    // });
  }

}
