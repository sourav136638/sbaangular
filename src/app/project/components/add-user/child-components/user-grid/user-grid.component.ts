import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/project/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogUtilService } from 'src/app/shared/components/dialogs/dialog-util.service';
import { DIALOG_MODE } from 'src/app/shared/constants/app-constant';
import { MESSAGE } from 'src/app/shared/constants/message-constants';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  userModel:UserModel[];
  subscriptions: Subscription[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<UserModel>;
  //displayedColumns: string[] = ['firstName', 'lastName', 'empId'];
  pageLength: number;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private userService:UserService,private router: Router,
    private dialogUtilService: DialogUtilService, private route: ActivatedRoute) {
    this.displayedColumns = [
      'firstName',
      'lastName',
      'empId',
      'action'
    ];

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.subscriptions.push(this.userService.userListDataSubject.asObservable().subscribe((data) => {
      console.log("From Grid Component", data);
      this.dataSource.data = data;
      this.pageLength = data.length;
      this.goToFirstPage();
    }));
    // this.route.data.subscribe((data) => {
    //   this.userModel = data.userList;
    //   this.dataSource.data = data.userList;
    //   console.log('list', this.userModel);
    // });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.subscriptions.forEach(s => s.unsubscribe());
    // this.entriesListService.reset();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.goToFirstPage();
  }

  goToFirstPage(){
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(element: UserModel) {
    this.router.navigate(['project/editUser', element]);
  }

  deleteUser(element: UserModel) {
    // this.dialogUtilService.openModal(DIALOG_MODE.WARNING, MESSAGE.USER_DELETE_CONFRIM, () => {
    //   //confirmed
    //   //console.log('Yes');
    //   this.userService.deleteUser(element.userId);
    // });
    this.userService.deleteUser(element.userId);

  }

}
