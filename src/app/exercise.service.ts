import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Exercise } from './exercise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(
    private http: HttpClient
  ) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('https://localhost:5001/api/exercise');
  }
}
