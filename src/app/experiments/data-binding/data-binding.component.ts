import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  template: `<div>
    <h1>Data Binding</h1>
    <button (click)="incrementCounter()">Increment</button>
    <p>{{ counter }}</p>
    <img width="140" src="{{ logo }}" />
    <img width="140" [src]="logo" />
    <img width="140" [src]="getLogo()" />
    <button (click)="myInput.focus()">Focus</button>
    <input [value]="counter" #myInput />
    <div [attr.data-custom]="counter"></div>

    @if (counter === 15) {
    <div>Displayed when counter === 15</div>
    } @else {
    <div>Displayed when counter !== 15</div>
    } @for (user of users; track user) {
    <div>{{ user }}</div>
    }
  </div>`,
  styles: `
    div {
      background-color: grey;
    }
  `,
})
export class DataBindingComponent {
  logo =
    'https://angular.dev/assets/images/press-kit/angular_wordmark_white.png';

  counter = 10;

  users = ['John', 'Jane', 'Jack'];

  incrementCounter() {
    this.counter++;
  }

  getLogo() {
    return this.logo + '.png';
  }
}
