import { TestBed, inject } from '@angular/core/testing';

import { ProgressService } from './progress.service';

describe('ProgressService', () => {
  let progressInfo;
  beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [ProgressService]
  }));

  it('should be created', inject([ProgressService], (service: ProgressService) => {
    expect(service).toBeTruthy();
  }));

  it('getProgress should return currentLevel 5', inject([ProgressService], (service: ProgressService) => {
    progressInfo = service.getProgressInfo();
    expect(progressInfo.currentLevel).toEqual('5');
  }));
});
