import { Component, inject } from '@angular/core';
import { HelloComponent } from './experiments/hello/hello.component';
import { AlertComponent } from './experiments/alert/alert.component';
import { UsersComponent } from './core/users/users.component';
import { AlertErrorComponent } from './ui/alert-error/alert-error.component';
import { AlertSuccessComponent } from './ui/alert-success/alert-success.component';
import { DataBindingComponent } from './experiments/data-binding/data-binding.component';
import { stringify } from './helpers/string.helper';
import { W04Component } from './workshops/w04/w04.component';
import { InputsOutputsComponent } from './experiments/inputs-outputs/inputs-outputs.component';
import { W05Component } from './workshops/w05/w05.component';
import { DiComponent } from './experiments/di/di.component';
import { ThemeService } from './core/services/theme.service';
import { W06Component } from './workshops/w06/w06.component';
import { HttpClientComponent } from './experiments/http-client/http-client.component';

@Component({
  selector: 'app-root',
  imports: [
    UsersComponent,
    AlertErrorComponent,
    AlertSuccessComponent,
    DataBindingComponent,
    InputsOutputsComponent,
    W04Component,
    W05Component,
    W06Component,
    DiComponent,
    HttpClientComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = stringify('ng-app19');
  themeService = inject(ThemeService);
}
