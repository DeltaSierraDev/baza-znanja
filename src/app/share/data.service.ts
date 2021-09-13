import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  appName: string;

  constructor() { 
    this.appName = "Baza Znanja";
  }

  
}
