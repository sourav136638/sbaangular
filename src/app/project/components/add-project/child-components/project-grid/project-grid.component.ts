import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
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
  projectModel: ProjectModel[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {
    this.displayedColumns = [
      'project',
      'noOfTask',
      'startdate',
      'enddate',
      'completed',
      'action'
    ];

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    

    this.subscriptions.push(this.projectService.projectListDataSubject.asObservable().subscribe((data) => {

      if (data) {
        this.dataSource.data = data;
        this.pageLength = data.length;
        this.goToFirstPage();
      }

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

  goToFirstPage() {
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProject(element: ProjectModel) {
    this.router.navigate(['project/editProject', element]);
  }

  deleteProject(element: ProjectModel) {
    
  }

}
