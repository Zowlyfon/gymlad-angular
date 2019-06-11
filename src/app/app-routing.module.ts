import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesComponent } from './exercises/exercises.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'exercises', component: ExercisesComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
