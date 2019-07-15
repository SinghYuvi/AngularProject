import { Component } from '@angular/core';
import { Iuser } from 'src/shared/model/user';

@Component({
  selector: 'heart-root',
  template:`
  <child-root [count]="finalCount" [allData]="data" (newData)="AddData($event)"></child-root>
  `,
  styles:[``],
})
export class ParentComponent {
  finalCount=10;
  data :Iuser[] = [
    {
      name : "Yuvraj Singh",
      emailId: "yuv@gmail.com"
    },
    {
      name : "Aman Singh",
      emailId: "aman@gmail.com"
    }];
  constructor(){}
  AddData(item:Iuser){
     console.log(item);
     //this.data.push({name:item.name,emailId:item.emailId});
     this.data.unshift({name:item.name,emailId:item.emailId});
  }
}





 



