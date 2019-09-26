import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { DialogUtilService } from 'src/app/shared/components/dialogs/dialog-util.service';
import { TaskModel } from 'src/app/shared/models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  subscriptions: Subscription[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<TaskModel>;
  //displayedColumns: string[] = ['firstName', 'lastName', 'empId'];
  pageLength: number;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private taskService:TaskService,private router: Router) {
    this.displayedColumns = [
      'task',
      'parent',
      'startdate',
      'enddate',
      'priority',
      'action'
    ];

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.subscriptions.push(this.taskService.getTaskListPage.asObservable().subscribe((data) => {
      // console.log("From Grid Component", data);
      this.dataSource.data = data;
      this.pageLength = data.length;
      this.goToFirstPage();
    }));
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

  editTask(element){

  }
  
  deleteTask(element){

  }

}
