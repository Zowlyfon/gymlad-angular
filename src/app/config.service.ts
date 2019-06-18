import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { }
  api = 'http://gymlad-api.zow.li/api/';
 }
