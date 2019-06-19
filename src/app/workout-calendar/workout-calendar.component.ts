import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-workout-calendar',
  templateUrl: './workout-calendar.component.html',
  styleUrls: ['./workout-calendar.component.scss']
})
export class WorkoutCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
