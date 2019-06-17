import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutTemplate } from '../workout-template';
import { WorkoutTemplateService } from '../workout-template.service';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-workout-templates',
  templateUrl: './workout-templates.component.html',
  styleUrls: ['./workout-templates.component.scss']
})
export class WorkoutTemplatesComponent implements OnInit {

  constructor(private workoutTemplateService: WorkoutTemplateService, private personService: PersonService, private router: Router) { }

  newWorkoutTemplateName: string;

  workoutTemplates: WorkoutTemplate[];

  getWorkoutTemplates(): void {
    this.workoutTemplateService.getWorkouts()
      .subscribe(workouts => this.workoutTemplates = workouts);
  }

  newWorkoutTemplate(): void {
    const newWorkoutTemplate = new WorkoutTemplate();
    newWorkoutTemplate.personId = this.personService.person.id;
    newWorkoutTemplate.templateName = this.newWorkoutTemplateName;
    this.workoutTemplateService.postWorkout(newWorkoutTemplate)
      .subscribe(workoutTemplate => this.workoutTemplates.push(workoutTemplate));
  }

  removeWorkoutTemplate(template: WorkoutTemplate) {
    this.workoutTemplateService.deleteWorkout(template.id)
      .subscribe(response => this.workoutTemplates.splice(this.workoutTemplates.indexOf(template), 1));
  }

  openWorkoutTemplateEditor(template: WorkoutTemplate) {
    this.router.navigate(['workout-template-editor/' + template.id]);
  }

  ngOnInit() {
    this.getWorkoutTemplates();
  }

}
