import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WorkoutSet} from './workout-set';
import { ConfigService } from './config.service';
import { MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutSetService {
  constructor(private http: HttpClient, private conf: ConfigService, private messagesService: MessagesService) { }

  private endpoint = this.conf.api + 'set/';

  workoutSets: WorkoutSet[] = [];

  clearWorkoutSets(): void {
    this.workoutSets = [];
  }

  getWorkoutSets(id: number): void {
    this.http.get<WorkoutSet[]>(this.conf.api + 'workout/' + id + '/sets')
      .subscribe(response => {
        for (const workoutSet of response) {
          this.workoutSets.push(workoutSet);
        }
      },
      error => this.messagesService.addMessage('Failed to get sets')
    );
  }

  postWorkoutSet(workoutSet: WorkoutSet): void {
    this.http.post<WorkoutSet>(this.endpoint, workoutSet)
      .subscribe(
        response => this.workoutSets.push(response),
        error => this.messagesService.addMessage('Failed to create new set')
      );
  }

  putWorkoutSet(workoutSet: WorkoutSet): void {
    this.http.put<WorkoutSet>(this.endpoint + workoutSet.id, workoutSet)
      .subscribe();
  }

  deleteWorkoutSet(workoutSet: WorkoutSet): void {
    this.http.delete<WorkoutSet>(this.endpoint + workoutSet.id)
      .subscribe(
        response => this.workoutSets.splice(this.workoutSets.indexOf(workoutSet), 1),
        error => this.messagesService.addMessage('Failed to delete set')
      );
  }
}
