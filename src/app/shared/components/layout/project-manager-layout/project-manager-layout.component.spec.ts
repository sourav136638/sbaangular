import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerLayoutComponent } from './project-manager-layout.component';

describe('ProjectManagerLayoutComponent', () => {
  let component: ProjectManagerLayoutComponent;
  let fixture: ComponentFixture<ProjectManagerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
