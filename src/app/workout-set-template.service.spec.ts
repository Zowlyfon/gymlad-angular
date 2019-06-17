import { TestBed } from '@angular/core/testing';

import { WorkoutSetTemplateService } from './workout-set-template.service';

describe('WorkoutSetTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutSetTemplateService = TestBed.get(WorkoutSetTemplateService);
    expect(service).toBeTruthy();
  });
});
