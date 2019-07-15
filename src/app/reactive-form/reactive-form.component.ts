import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ReactiveForm } from 'src/shared/model/reactiveForm';
import { RegularEx } from './regEx';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm : FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() 
   {
    this.userForm = this.fb.group({
      'username' : ['',[Validators.required, Validators.minLength(5),RegularEx.username]],
      'userpassword' : ['',[Validators.required, RegularEx.userpassword]],
      'useremail' : ['',[Validators.required, RegularEx.useremail]],
      'UserLogin' : this.fb.group({
        'userid': ['', [Validators.required]]
        })
    });
   }
   Save(item: ReactiveForm)
   {
    this.submitted = true;
    if(!this.userForm.valid)
    {
      return;
    }
     console.log(item);
  }  
  }
