import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Exercise } from './exercise';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(
    private http: HttpClient,
    private conf: ConfigService
  ) { }

  private endpoint = this.conf.api + 'exercise/';

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.endpoint);
  }

  putExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.put<Exercise>(this.endpoint + exercise.id , exercise);
  }

  postExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(this.endpoint, exercise);
  }

  deleteExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.delete<Exercise>(this.endpoint + exercise.id);
  }
}
