import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNormalTaskComponent } from './add-normal-task.component';

describe('AddNormalTaskComponent', () => {
  let component: AddNormalTaskComponent;
  let fixture: ComponentFixture<AddNormalTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNormalTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNormalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
