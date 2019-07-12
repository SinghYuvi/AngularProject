import { Component, OnInit } from '@angular/core';
import { TempForm } from 'src/shared/templateform';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model = new TempForm();
  constructor() { }

  ngOnInit() {
  }
  Save(data){
    console.log(data);
  }
}
