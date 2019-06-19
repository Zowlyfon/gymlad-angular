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
import { WorkoutSetTemplate } from '../workout-set-template';
import { WorkoutSetTemplateService } from '../workout-set-template.service';
import { WorkoutTemplate } from '../workout-template';
import { WorkoutTemplateService } from '../workout-template.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-workout-editor',
  templateUrl: './workout-editor.component.html',
  styleUrls: ['./workout-editor.component.scss']
})
export class WorkoutEditorComponent implements OnInit {
  constructor(private workoutService: WorkoutService,
              public workoutSetService: WorkoutSetService,
              private exerciseService: ExerciseService,
              private workoutTemplateService: WorkoutTemplateService,
              private workoutSetTemplateService: WorkoutSetTemplateService,
              private messagesService: MessagesService,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) { }

  setTemplates: WorkoutSetTemplate[];
  templates: WorkoutTemplate[];
  selectedTemplate: number;
  workoutId: number;
  exercises: Exercise[];
  selectedExercise: number;
  selectedReps: number;
  selectedWeight: number;

  numberOfSetsForExercise(exercise: Exercise): number {
    return this.workoutSetService.workoutSets.filter(w => w.exerciseId === exercise.id).length;
  }

  selectExercise(id: number) {
    this.selectedExercise = id;
  }

  getExercises(): void {
    this.exerciseService.getExercises()
      .subscribe(exercises => this.exercises = exercises);
  }

  getWorkoutTemplates(): void {
    this.workoutTemplateService.getWorkouts()
      .subscribe(templates => {
        this.templates = templates;
        if (this.templates.length > 0) {
          this.selectedTemplate = this.templates[0].id;
        }
      });
  }

  newWorkoutSet(): void {
    const newWorkoutSet = new WorkoutSet();
    newWorkoutSet.exerciseId = this.selectedExercise;
    newWorkoutSet.workoutId = this.workoutId;
    newWorkoutSet.reps = this.selectedReps;
    newWorkoutSet.weight = this.selectedWeight;
    this.workoutSetService.postWorkoutSet(newWorkoutSet)
  }

  newWorkoutSetExercise(exerciseId: number): void {
    const newWorkoutSet = new WorkoutSet();
    newWorkoutSet.exerciseId = exerciseId;
    newWorkoutSet.workoutId = this.workoutId;
    newWorkoutSet.reps = this.selectedReps;
    newWorkoutSet.weight = this.selectedWeight;
    this.workoutSetService.postWorkoutSet(newWorkoutSet);
  }

  updateWorkoutSet(workoutSet: WorkoutSet): void {
    this.workoutSetService.putWorkoutSet(workoutSet);
  }

  removeWorkoutSet(workoutSet: WorkoutSet): void {
    this.workoutSetService.deleteWorkoutSet(workoutSet);
  }

  importTemplate(): void {
    this.workoutSetTemplateService.getWorkoutSets(this.selectedTemplate)
      .subscribe(setTemplates => {
        for (const t of setTemplates) {
          const w = new WorkoutSet();
          w.workoutId = this.workoutId;
          w.exerciseId = t.exerciseId;
          w.reps = t.reps;
          w.weight = this.exercises.find(e => e.id === t.exerciseId).trainingMax * t.percentage;
          this.workoutSetService.postWorkoutSet(w);
        }
      });
  }


  ngOnInit() {
    this.workoutId = +this.route.snapshot.paramMap.get('workoutId');

    if (!this.workoutId) {
      this.router.navigate(['/workouts']);
    }

    this.getExercises();
    this.workoutSetService.clearWorkoutSets();
    this.workoutSetService.getWorkoutSets(this.workoutId);
    this.getWorkoutTemplates();
  }

}
