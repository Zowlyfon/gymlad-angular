import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { }
  api = 'https://localhost:5001/api/';
 }
