import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WorkoutSet} from './workout-set';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutSetService {
  constructor(private http: HttpClient, private conf: ConfigService) { }

  private endpoint = this.conf.api + 'set/';

  getWorkoutSets(exerciseId: number): Observable<WorkoutSet[]> {
    return this.http.get<WorkoutSet[]>(this.conf.api + 'workout/sets/' + exerciseId);
  }

  postWorkoutSet(workoutSet: WorkoutSet): Observable<WorkoutSet> {
    return this.http.post<WorkoutSet>(this.endpoint, workoutSet);
  }

  putWorkoutSet(workoutSet: WorkoutSet): Observable<WorkoutSet> {
    return this.http.put<WorkoutSet>(this.endpoint + workoutSet.id, workoutSet);
  }

  deleteWorkoutSet(workoutSetId: number): Observable<WorkoutSet> {
    return this.http.delete<WorkoutSet>(this.endpoint + workoutSetId);
  }
}
