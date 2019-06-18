import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }

  messages: string[] = [];

  addMessage(message: string): void {
    this.messages.push(message);
  }

  addErrorMessage(error: HttpErrorResponse): void {
    if (error.error instanceof ErrorEvent) {
      this.addMessage(error.error.toString());
    }
  }

  removeMessage(message: string): void {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  clearMessages(): void {
    this.messages = [];
  }
}
