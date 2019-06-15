import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';

import { Workout } from '../workout';
import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  constructor(private workoutService: WorkoutService, private personService: PersonService, private router: Router) { }

  workouts: Workout[];

  selectedDate: Date;

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts);
  }

  newWorkout(): void {
    const newWorkout = new Workout();
    newWorkout.personId = this.personService.person.id;
    newWorkout.time = this.selectedDate;
    this.workoutService.postWorkout(newWorkout).subscribe(
      workout => this.workouts.push(workout)
    );
  }

  openWorkoutEditor(workoutId: number): void {
    this.router.navigate(['/workout-editor/' + workoutId]);
  }

  ngOnInit() {
    this.personService.getPerson();
    this.getWorkouts();
  }

}
