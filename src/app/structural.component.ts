import { Component } from '@angular/core';

@Component({
  selector: 'struct-root',
  template:`
  
  <!-- Structural Directives Example (*ngFor, *ngSwitch, *ngTemplate)-->

  <ul *ngFor="let course of courses; let i= index">
  <li>{{i+1}}-{{course}}</li>
  </ul>

  <button type="button" class="btn btn-danger btn-md"
  (click)="isActive='home'"
  >Home</button>
  <button type="button" class="btn btn-danger btn-md"
  (click)="isActive='about'"
  >About</button>

  <div *ngIf="isActive" [ngSwitch]="isActive">
  <h2 *ngSwitchCase="'home'">Home Section</h2>
  <h2 *ngSwitchCase="'about'">About Section</h2>
  <h2 *ngSwitchDefault>Not Found</h2>
  </div>`,
  styles:[``],
})
export class StructuralComponent {
  isActive;
  courses = ['TypeScript', 'Nodejs', 'JavaScript', 'MongoDB', 'Express'];
  constructor(){}
  }






 



