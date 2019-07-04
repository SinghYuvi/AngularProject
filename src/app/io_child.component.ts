import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iuser } from 'src/shared/user';

@Component({
  selector: 'child-root',
  template:`
    <span class="glyphicon glyphicon-heart"
        [class.fill] = "activeHeart"
        [class.default] = "!activeHeart"
        (click) = "HeartAction()"
   ></span> {{count}} 

   <ul *ngFor="let d of allData">
   <li>{{d.name}}</li>
   <li>{{d.emailId}}</li>
  </ul>

  <input type="text" placeholder="Enter your name" class="form-control"
  #username
  >
  <input type="email" placeholder="Enter your email" class="form-control"
  #email
  >
  <button type="button" (click)="Submit(username.value, email.value)">Click</button>
  `,
  styles:[`
  .glyphicon{
    font-size: 40px;
    cursor:pointer;
  } 
  .fill{color:red;}
  .default{color:grey;}
  `],
})
export class ChildComponent {
   @Input() count;
   @Input() allData :Iuser;
   @Output() newData = new EventEmitter<Iuser>();
   activeHeart = false;
  constructor(){}
  HeartAction(){
    this.activeHeart = !this.activeHeart;
    this.count += this.activeHeart ? 1 : -1;
  }
  Submit(uname, uId){
   this.newData.emit({name:uname, emailId:uId})
  }    
}









