import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedDirective } from './directives/connected.directive';
import { HighlightDirective } from './directives/highlight.directive';

const declarations = [
  ConnectedDirective, HighlightDirective
];

@NgModule({
  declarations: [declarations, HighlightDirective],
  imports: [
    CommonModule
  ],
  exports : [
    declarations
  ]
})
export class SharedModule { }
