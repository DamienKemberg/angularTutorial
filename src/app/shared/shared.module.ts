import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedDirective } from './directives/connected.directive';

const declarations = [
  ConnectedDirective
];

@NgModule({
  declarations: [declarations],
  imports: [
    CommonModule
  ],
  exports : [
    declarations
  ]
})
export class SharedModule { }
