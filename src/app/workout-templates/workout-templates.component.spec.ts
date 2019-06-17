import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTemplatesComponent } from './workout-templates.component';

describe('WorkoutTemplatesComponent', () => {
  let component: WorkoutTemplatesComponent;
  let fixture: ComponentFixture<WorkoutTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
