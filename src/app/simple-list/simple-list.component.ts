import { Component, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleListComponent),
      multi: true
    }
  ]
})
export class SimpleListComponent implements OnInit, ControlValueAccessor {

  public list: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  /*
   * Begin of ControlValueAccessor implementation
   */
  private propagateChange = (_: any) => {};

  public writeValue(value: string[]) {
    this.list = value;
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched() { }

  /*
   * End of ControlValueAccessor implementation
   */
  public addItem() {
    this.list.push('');
    this.propagateChange(this.list);
  }

  public removeItem(index) {
    this.list.splice(index, 1);
    this.propagateChange(this.list);
  }

  public itemChange(e, index) {
    this.propagateChange(this.list);
  }

  public trackByFn(index, item) {
    return index;
  }

}
