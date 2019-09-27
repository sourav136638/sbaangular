import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserApiService } from 'src/app/shared/rest-api/user-api.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { DialogUtilService } from 'src/app/shared/components/dialogs/dialog-util.service';
import { DIALOG_MODE } from 'src/app/shared/constants/app-constant';
import { MESSAGE, MODE } from 'src/app/shared/constants/message-constants';
import { IApiResponse } from 'src/app/shared/rest-api/model/common/common.model';
import { UserApiModel } from 'src/app/shared/rest-api/model/user-api.model';
import { IResponse } from 'src/app/shared/models/common/common.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userListDataSubject: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([]);
  constructor(private restApi: UserApiService, private route: Router,
    private dialogService: DialogUtilService) { }

  createUser(userModel: UserModel) {
    this.loading.next(true);
    this.restApi.createUser(userModel).subscribe((response) => {
      this.loading.next(false);
      this.openUserDialog(MODE.SUCCESS, MESSAGE.USER_CREATE_SUCCESS);
      this.getUserListPage();
    }, (error => {
      this.loading.next(false);
      console.error(error);
      this.openUserDialog(MODE.ERROR, MESSAGE.USER_CREATE_ERROR);
    }));
  }

  public getUserListPage() {
    this.loading.next(true);

    this.restApi.getUserList().subscribe((response: any) => {
      //Trigger page data
      this.userListDataSubject.next(response);
      //stop loader
      this.loading.next(false);
    }, (error => {
      this.loading.next(false);
      console.error(error);
    }));
  }

  updateUser(userModel: UserModel) {
    this.loading.next(true);
    this.restApi.updateUser(userModel).subscribe((response) => {
      this.loading.next(false);
      this.openUserDialog(DIALOG_MODE.SUCCESS, MESSAGE.USER_UPDATE_SUCCESS);
    }, (error => {
      this.loading.next(false);
      console.error(error);
      this.openUserDialog(DIALOG_MODE.ERROR, MESSAGE.USER_UPDATE_ERROR);
    }));
  }

  deleteUser(userId: string) {
    
    this.loading.next(true);
    this.restApi.deleteUserByUserId(userId).subscribe((response) => {
      this.loading.next(false);
     
      this.openUserDialog(DIALOG_MODE.SUCCESS, MESSAGE.USER_DELETE_SUCCESS);
      this.route.navigate(['project/addUser']);
      this.getUserListPage();
    }, (error => {
      this.loading.next(false);
      console.error(error);
      this.openUserDialog(DIALOG_MODE.ERROR, MESSAGE.USER_DELETE_ERROR);
    }));
  }

  openUserDialog(mode: string, message: string): void {
    this.dialogService.openModal(DIALOG_MODE.SUCCESS, mode, message, () => {
      
    }, () => {
     
    });
  }
}
