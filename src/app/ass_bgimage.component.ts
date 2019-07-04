import { Component } from '@angular/core';

@Component({
  selector: 'image-root',
  template:`
  <div>
  <button class ="button button2"
  (click)="person=Boy"
  [disabled]= "person==Boy"
  >Boy</button>

  <button class ="button button3"
  (click)="person=Girl"
  [disabled]= "person==Girl"
  >Girl</button>
  </div>

  <div *ngIf="person">
    <img src = {{person.ImgUrl}} width = "150" height = "200">
    <h2>{{person.name}}</h2>
  </div>

  `,
  styles:[`
  .button2 {
    background-color: #008CBA;
    font-size: 20px;
    margin: 2px 4px;
    }  /* Blue */ 
.button3 {
    background-color: #f44336;
    font-size: 20px;
    margin: 2px 4px;
    } /* Red */ 
  `],
})
export class ImageComponent {

    Boy = {
        name : "John Doe",
        ImgUrl :'../assets/Boyimage.jpg'
      };
    Girl = {
        name : "Emma",
        ImgUrl :'../assets/girl images.jpg'
    } ;

    constructor (){
    }
    person;
  }
