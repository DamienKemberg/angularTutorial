import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedDirective } from './directives/connected.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { SquarePipe } from './pipes/square.pipe';
import { PowerPipe } from './pipes/power.pipe';

const declarations = [
  ConnectedDirective, HighlightDirective, SquarePipe, PowerPipe
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule
  ],
  exports : [
    declarations
  ]
})
export class SharedModule { }
