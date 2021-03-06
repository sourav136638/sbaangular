import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;

  subscriptions: Subscription[] = [];
  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      employeeId: ['', Validators.required]
    });

  }

  get firstName() { return this.addUserForm.get('firstName'); }
  get lastName() { return this.addUserForm.get('lastName'); }
  get empId() { return this.addUserForm.get('empId'); }

  submit() {
    if (this.addUserForm.valid) {
      let userModel: UserModel = this.addUserForm.value;
      this.userService.createUser(userModel);
      
    } else {
      this.markAsTouched(this.addUserForm);
    }
  }

  resetUser(){
    this.addUserForm.reset();
  }

}
