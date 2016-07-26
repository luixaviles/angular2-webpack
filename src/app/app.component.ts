import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import { FORM_DIRECTIVES } from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms'
import {bootstrap} from '@angular/platform-browser-dynamic'

import { ApiService } from './shared';

import { HighlightDirective } from './attribute-directives/highlight.directive';
import { PasswordGeneratorDirective } from './attribute-directives/password-generator.directive';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, HighlightDirective, PasswordGeneratorDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  private color: string;
  public value: string;
  private length: Number = 2;
  texto: any;

  constructor(private api: ApiService) {
    this.color = 'red';
  }
}

// bootstrap(AppComponent, [
//   provideForms(),
//   disableDeprecatedForms()
// ])