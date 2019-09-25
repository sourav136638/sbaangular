import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { ProjectService } from 'src/app/project/services/project.service';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {

  subscriptions: Subscription[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<ProjectModel>;
  pageLength: number;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private projectService:ProjectService,private router: Router) {
    this.displayedColumns = [
      'project',
      //'noOfTask',
      'startDate',
      'endDate',
      'completed',
      'action'
    ];

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.subscriptions.push(this.projectService.projectListDataSubject.asObservable().subscribe((data) => {
      // console.log("From Grid Component", data);
     // this.dataSource.data = data;
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

  editProject(element: ProjectModel) {
    this.router.navigate(['project/editProject', element]);
  }

  deleteProject(element: ProjectModel) {
    // this.dialogUtilService.openModal(DIALOG_MODE.WARNING, MESSAGE.USER_DELETE_CONFRIM, () => {
    //   //confirmed
    //   //console.log('Yes');
    //   this.userService.deleteUser(element.userId);
    // });
    this.projectService.deleteProject(element.projectId);
  }

suspendProject(element: ProjectModel){
  this.projectService.deleteProject(element.projectId);
}

}
