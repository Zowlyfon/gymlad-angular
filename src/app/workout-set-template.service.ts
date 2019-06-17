import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WorkoutSetTemplate} from './workout-set-template';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutSetTemplateService {
  constructor(private http: HttpClient, private conf: ConfigService) { }

  private endpoint = this.conf.api + 'settemplate/';

  getWorkoutSets(templateId: number): Observable<WorkoutSetTemplate[]> {
    return this.http.get<WorkoutSetTemplate[]>(this.conf.api + 'workouttemplate/' + templateId + '/sets');
  }

  postWorkoutSet(workoutSet: WorkoutSetTemplate): Observable<WorkoutSetTemplate> {
    return this.http.post<WorkoutSetTemplate>(this.endpoint, workoutSet);
  }

  putWorkoutSet(workoutSet: WorkoutSetTemplate): Observable<WorkoutSetTemplate> {
    return this.http.put<WorkoutSetTemplate>(this.endpoint + workoutSet.id, workoutSet);
  }

  deleteWorkoutSet(workoutSetId: number): Observable<WorkoutSetTemplate> {
    return this.http.delete<WorkoutSetTemplate>(this.endpoint + workoutSetId);
  }
}
