import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { WorkoutTemplate } from '../workout-template';
import { WorkoutTemplateService } from '../workout-template.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  constructor(private workoutService: WorkoutService,
              private workoutTemplateService: WorkoutTemplateService,
              private personService: PersonService,
              private router: Router) { }

  workouts: Workout[];
  selectedDate: Date;
  fromTemplate: boolean;
  selectedTemplate: number;
  workoutTemplates: WorkoutTemplate[];

  getWorkoutTemplates(): void {
    this.workoutTemplateService.getWorkouts()
      .subscribe(templates => this.workoutTemplates = templates);
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts);
  }

  newWorkout(): void {
    const newWorkout = new Workout();
    newWorkout.personId = this.personService.person.id;
    newWorkout.time = this.selectedDate;
    this.workoutService.postWorkout(newWorkout).subscribe(
      workout => {
        this.openWorkoutEditor(workout.id);
      }
    );
  }

  removeWorkout(workout: Workout): void {
    this.workoutService.deleteWorkout(workout)
      .subscribe(response => this.workouts.splice(this.workouts.indexOf(workout), 1));
  }

  openWorkoutEditor(workoutId: number): void {
    if (this.fromTemplate) {
      this.router.navigate(['/workout-editor/' + workoutId + '/' + this.selectedTemplate]);
    } else {
      this.router.navigate(['/workout-editor/' + workoutId]);
    }
  }

  ngOnInit() {
    this.personService.getPerson();
    this.getWorkouts();
    this.getWorkoutTemplates();
  }

}
