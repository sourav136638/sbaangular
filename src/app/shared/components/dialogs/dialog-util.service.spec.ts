import { TestBed } from '@angular/core/testing';

import { DialogUtilService } from './dialog-util.service';

describe('DialogUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogUtilService = TestBed.get(DialogUtilService);
    expect(service).toBeTruthy();
  });
});
