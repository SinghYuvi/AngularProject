import { Component } from '@angular/core';

@Component({
  selector: 'star-root',
  template:`
    <span [class] = "isActive ? 'glyphicon glyphicon-star-empty' : 'glyphicon glyphicon-star'" 
    (click) = "Action()"
  ></span> 
  `,
  styles:[``],
})
export class Ass_starComponent {
  isActive = true;
  Action (){
      this.isActive = !this.isActive;
  }
}
