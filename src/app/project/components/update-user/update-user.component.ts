import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtils from 'src/app/shared/util/form-utils';
import { UserService } from '../../services/user.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  addUserForm: FormGroup;
  markAsTouched = FormUtils.markAsTouched;
  isFieldValid = FormUtils.isFieldValid;
  isErrorExists = FormUtils.isErrorExists;
  paramsData: any;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      empId: ['', Validators.required]
    });

    const routeParams = this.router.snapshot.params;
    this.paramsData = routeParams;
   
  }

  get firstName() { return this.addUserForm.get('firstName'); }
  get lastName() { return this.addUserForm.get('lastName'); }
  get empId() { return this.addUserForm.get('empId'); }

  submit() {
    if (this.addUserForm.valid) {
      let userModel: UserModel = this.addUserForm.value;
      this.userService.updateUser(userModel);
   
    } else {
      this.markAsTouched(this.addUserForm);
    }
  }

  cancel() {
    this.route.navigate(['project/addUser']);
  }

}
