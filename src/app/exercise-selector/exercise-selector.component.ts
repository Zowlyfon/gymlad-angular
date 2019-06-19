import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-exercise-selector',
  templateUrl: './exercise-selector.component.html',
  styleUrls: ['./exercise-selector.component.scss']
})
export class ExerciseSelectorComponent implements OnInit {

  constructor(private exerciseService: ExerciseService, private messagesService: MessagesService) { }

  @Output() exercise: EventEmitter<number> = new EventEmitter();

  exercises: Exercise[] = [];
  selectedExercise: number;

  getExercises(): void {
    this.exerciseService.getExercises()
      .subscribe(
        response => {
          for (const exercise of response) {
            this.exercises.push(exercise);
          }
          if (this.exercises.length > 0) {
            this.selectedExercise = this.exercises[0].id;
            this.exercise.emit(this.selectedExercise);
          }
        },
        error => this.messagesService.addMessage('Failed to retrieve exercises')
      );
  }

  exerciseSelected(): void {
    this.exercise.emit(this.selectedExercise);
  }

  ngOnInit() {
    this.getExercises();
  }

}
