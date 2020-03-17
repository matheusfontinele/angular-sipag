import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  form;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name:'',
      adress:''
    });
  }

  onSubmit(data){
    console.warn(data.name)
  }

}