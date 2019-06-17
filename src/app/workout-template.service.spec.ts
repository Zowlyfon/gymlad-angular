import { TestBed } from '@angular/core/testing';

import { WorkoutTemplateService } from './workout-template.service';

describe('WorkoutTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutTemplateService = TestBed.get(WorkoutTemplateService);
    expect(service).toBeTruthy();
  });
});
