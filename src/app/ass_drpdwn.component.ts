import { Component } from '@angular/core';

@Component({
  selector: 'drpdwn-root',
  template:`

  <div class="panel-body">
          <ng-content select=".body"></ng-content>
    </div>        
    <img src="{{imgUrl | ys :'imgUrl'}}">     
  `,
  styles:[``],
})
export class DropdownComponent {
  imgUrl='http://lorempixel.com/400/200/sports/';
  isActive:boolean = false;
  constructor(){}
  }
