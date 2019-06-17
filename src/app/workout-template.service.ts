import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { WorkoutTemplate } from './workout-template';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTemplateService {
  constructor(private http: HttpClient, private conf: ConfigService) { }

  private endpoint = this.conf.api + 'workouttemplate/';

  getWorkouts(): Observable<WorkoutTemplate[]> {
    return this.http.get<WorkoutTemplate[]>(this.endpoint);
  }

  getWorkout(id: number): Observable<WorkoutTemplate> {
    return this.http.get<WorkoutTemplate>(this.endpoint + id);
  }

  postWorkout(workout: WorkoutTemplate): Observable<WorkoutTemplate> {
    return this.http.post<WorkoutTemplate>(this.endpoint, workout);
  }

  putWorkout(workout: WorkoutTemplate): Observable<WorkoutTemplate> {
    return this.http.put<WorkoutTemplate>(this.endpoint + workout.id, workout);
  }

  deleteWorkout(templateId: number): Observable<WorkoutTemplate> {
    return this.http.delete<WorkoutTemplate>(this.endpoint + templateId);
  }
}
