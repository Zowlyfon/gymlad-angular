import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WorkoutService } from '../workout.service';
import { WorkoutSetService } from '../workout-set.service';
import { ExerciseService } from '../exercise.service';
import { Workout } from '../workout';
import { WorkoutSet } from '../workout-set';
import { Exercise } from '../exercise';


@Component({
  selector: 'app-workout-editor',
  templateUrl: './workout-editor.component.html',
  styleUrls: ['./workout-editor.component.scss']
})
export class WorkoutEditorComponent implements OnInit {
  constructor(private workoutService: WorkoutService,
              private workoutSetService: WorkoutSetService,
              private exerciseService: ExerciseService,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) { }

  workoutId: number;

  workout: Workout;

  workoutSets: WorkoutSet[];

  exercises: Exercise[];

  selectedExercise: number;

  numberOfSetsForExercise(exercise: Exercise): number {
    return this.workoutSets.filter(w => w.exerciseId === exercise.id).length;
  }

  getExercises(): void {
    this.exerciseService.getExercises()
      .subscribe(exercises => this.exercises = exercises);
  }

  getWorkoutSets(): void {
    this.workoutSetService.getWorkoutSets(this.workoutId)
      .subscribe(workoutSets => this.workoutSets = workoutSets);
  }

  newWorkoutSet(): void {
    const newWorkoutSet = new WorkoutSet();
    newWorkoutSet.exerciseId = this.selectedExercise;
    newWorkoutSet.workoutId = this.workoutId;
    this.workoutSetService.postWorkoutSet(newWorkoutSet)
      .subscribe(workoutSet => this.workoutSets.push(workoutSet));
  }

  newWorkoutSetExercise(exerciseId: number): void {
    const newWorkoutSet = new WorkoutSet();
    newWorkoutSet.exerciseId = exerciseId;
    newWorkoutSet.workoutId = this.workoutId;
    this.workoutSetService.postWorkoutSet(newWorkoutSet)
      .subscribe(workoutSet => this.workoutSets.push(workoutSet));
  }

  updateWorkoutSet(workoutSet: WorkoutSet): void {
    this.workoutSetService.putWorkoutSet(workoutSet)
      .subscribe();
  }

  removeWorkoutSet(workoutSet: WorkoutSet): void {
    this.workoutSetService.deleteWorkoutSet(workoutSet.id)
      .subscribe(response => this.workoutSets.splice(this.workoutSets.indexOf(workoutSet), 1));
  }

  ngOnInit() {
    this.workoutId = +this.route.snapshot.paramMap.get('workoutId');

    if (!this.workoutId) {
      this.router.navigate(['/workouts']);
    }

    this.getWorkoutSets();
    this.getExercises();
  }

}
