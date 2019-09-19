import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createUser(userModel:UserModel){
    // this.loading.next(true);
    // this.restApi.createUserManagement(userManagementAppModel).subscribe((response) => {
    //   this.loading.next(false);
    //  this.openUserDialog(MODE.SUCCESS,MESSAGE.USER_CREATE_SUCCESS);
    // }, (error => {
    //   this.loading.next(false);
    //   console.error(error);
    //   this.openUserDialog(MODE.ERROR,MESSAGE.USER_CREATE_ERROR);
    // })); 
  }
}
