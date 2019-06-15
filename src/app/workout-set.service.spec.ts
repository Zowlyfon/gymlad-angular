import { TestBed } from '@angular/core/testing';

import { WorkoutSetService } from './workout-set.service';

describe('WorkoutSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutSetService = TestBed.get(WorkoutSetService);
    expect(service).toBeTruthy();
  });
});
