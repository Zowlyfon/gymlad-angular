import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { ExercisesComponent } from './exercises/exercises.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutEditorComponent } from './workout-editor/workout-editor.component';
import { RegisterComponent } from './register/register.component';
import { WorkoutTemplatesComponent } from './workout-templates/workout-templates.component';
import { WorkoutTemplateEditorComponent } from './workout-template-editor/workout-template-editor.component';

const routes: Routes = [
  { path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard] },
  { path: 'person', component: PersonComponent, canActivate: [AuthGuard] },
  { path: 'workout-templates', component: WorkoutTemplatesComponent, canActivate: [AuthGuard] },
  { path: 'workout-template-editor/:templateId', component: WorkoutTemplateEditorComponent, canActivate: [AuthGuard] },
  { path: 'workouts', component: WorkoutsComponent, canActivate: [AuthGuard] },
  { path: 'workout-editor/:workoutId', component: WorkoutEditorComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/person', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
