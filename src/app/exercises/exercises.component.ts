import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) { }

  exercises: Exercise[];

  title = 'Exercises';

  getExercises(): void {
    this.exerciseService.getExercises()
      .subscribe(exercises => this.exercises = exercises);
  }

  updateExercise(exercise: Exercise): void {
    this.exerciseService.putExercise(exercise)
      .subscribe(response => exercise = response);
  }

  newExercise(): void {
    const newExercise = new Exercise();
    newExercise.name = 'New Exercise';
    this.exerciseService.postExercise(newExercise)
      .subscribe(exercise => this.exercises.push(exercise));
  }

  removeExercise(exercise: Exercise): void {
    this.exerciseService.deleteExercise(exercise)
      .subscribe(response => this.exercises.splice(this.exercises.indexOf(exercise), 1));
  }

  ngOnInit() {
    this.getExercises();
  }

}
