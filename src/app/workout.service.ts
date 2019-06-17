import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Workout } from './workout';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  constructor(private http: HttpClient, private conf: ConfigService) { }

  private endpoint = this.conf.api + 'workout/';

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.endpoint);
  }

  getWorkout(id: number): Observable<Workout> {
    return this.http.get<Workout>(this.endpoint + id);
  }

  postWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.endpoint, workout);
  }

  putWorkout(workout: Workout): Observable<Workout> {
    return this.http.put<Workout>(this.endpoint + workout.id, workout);
  }

  deleteWorkout(workout: Workout): Observable<Workout> {
    return this.http.delete<Workout>(this.endpoint + workout.id);
  }
}
