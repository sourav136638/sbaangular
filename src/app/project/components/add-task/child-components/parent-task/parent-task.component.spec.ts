import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTaskComponent } from './parent-task.component';

describe('ParentTaskComponent', () => {
  let component: ParentTaskComponent;
  let fixture: ComponentFixture<ParentTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
