import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { }
  api = 'https://gymlad-api.herokuapp.com/api/';
 }
