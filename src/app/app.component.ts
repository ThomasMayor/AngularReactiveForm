import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public form: FormGroup;


  constructor (private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      category: ['cat', Validators.required],
      //sub-object
      name: this.formBuilder.group({
        first: ['Toto', Validators.required],
        last: ['Titi', Validators.required]
      }),
      count: [10, Validators.compose([Validators.min(1), Validators.max(100)])],
      //array of subobject
      details: this.formBuilder.array([
        this.getDetails('detail 1', 'Title 1'),
        this.getDetails('detail 2', 'Title 2'),
        this.getDetails('detail 3', 'Title 3'),
      ]),
      //simple array
      list: this.formBuilder.array([
          new FormControl(10),
          new FormControl(11),
          new FormControl(12),
          new FormControl(13)
      ]),
      //simple edited by custom component via formControlName
      list2: new FormControl(['item 1', 'item 2', 'item 3', 'item 4'])
    })
  }

  getDetails(text, title): FormGroup {
    return this.formBuilder.group({
      text: [text, Validators.required],
      title: [title, Validators.required]
    })
  }
}
