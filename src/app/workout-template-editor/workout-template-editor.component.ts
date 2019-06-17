import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WorkoutSetTemplate } from '../workout-set-template';
import { WorkoutSetTemplateService } from '../workout-set-template.service';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { WorkoutTemplate } from '../workout-template';

@Component({
  selector: 'app-workout-template-editor',
  templateUrl: './workout-template-editor.component.html',
  styleUrls: ['./workout-template-editor.component.scss']
})
export class WorkoutTemplateEditorComponent implements OnInit {

  constructor(private workoutSetTemplateService: WorkoutSetTemplateService,
              private exerciseService: ExerciseService,
              private router: Router,
              private route: ActivatedRoute) { }

  exercises: Exercise[];
  selectedExercise: number;
  templateId: number;
  setTemplates: WorkoutSetTemplate[];

  numberOfSetsForExercise(exercise: Exercise): number {
    return this.setTemplates.filter(w => w.exerciseId === exercise.id).length;
  }

  getExercises(): void {
    this.exerciseService.getExercises()
      .subscribe(exercises => this.exercises = exercises);
  }

  getWorkoutSetTemplates(): void {
    this.workoutSetTemplateService.getWorkoutSets(this.templateId)
      .subscribe(setTemplates => this.setTemplates = setTemplates);
  }

  updateWorkoutSetTemplate(setTemplate: WorkoutSetTemplate): void {
    this.workoutSetTemplateService.putWorkoutSet(setTemplate)
      .subscribe();
  }

  newWorkoutSetTemplate(): void {
    const newSetTemplate = new WorkoutSetTemplate();
    newSetTemplate.exerciseId = this.selectedExercise;
    newSetTemplate.workoutTemplateId = this.templateId;
    this.workoutSetTemplateService.postWorkoutSet(newSetTemplate)
      .subscribe(setTemplate => this.setTemplates.push(setTemplate));
  }

  removeWorkoutSetTemplate(setTemplate: WorkoutSetTemplate): void {
    this.workoutSetTemplateService.deleteWorkoutSet(setTemplate.id)
      .subscribe(response => this.setTemplates.splice(this.setTemplates.indexOf(setTemplate), 1));
  }

  ngOnInit() {
    this.templateId = +this.route.snapshot.paramMap.get('templateId');
    if (!this.templateId) {
      this.router.navigate(['/workout-templates']);
    }
    this.getExercises();
    this.getWorkoutSetTemplates();
  }

}
