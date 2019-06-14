import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

import { Workout } from '../workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  workouts: Workout[];

  selectedDate: Date;

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts);
  }

  newWorkout(): void {
    this.workoutService.postWorkout(new Workout());
  }

  ngOnInit() {
    this.getWorkouts();
  }

}
