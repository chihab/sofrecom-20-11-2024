import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  template: `<input (input)="onInput($event)" />`,
  styles: ``,
})
export class InputComponent {
  @Output()
  change = new EventEmitter<string>();

  constructor() {
    console.log('InputComponent created');
  }

  onInput(event: any) {
    // console.log(event.target.value);
    this.change.emit(event.target.value as string);
  }
}
