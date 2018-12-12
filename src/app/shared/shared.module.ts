import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedDirective } from './directives/connected.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { SquarePipe } from './pipes/square.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const declarations = [
  ConnectedDirective, HighlightDirective, SquarePipe, PowerPipe, ProgressBarComponent
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
