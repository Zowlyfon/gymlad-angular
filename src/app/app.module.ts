import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';
import { PersonComponent } from './person/person.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkoutEditorComponent } from './workout-editor/workout-editor.component';
import { RegisterComponent } from './register/register.component';
import { WorkoutTemplatesComponent } from './workout-templates/workout-templates.component';
import { WorkoutTemplateEditorComponent } from './workout-template-editor/workout-template-editor.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    LoginComponent,
    PersonComponent,
    WorkoutsComponent,
    NavigationComponent,
    WorkoutEditorComponent,
    RegisterComponent,
    WorkoutTemplatesComponent,
    WorkoutTemplateEditorComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    GoogleChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
