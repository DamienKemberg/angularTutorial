import { Directive, Input, HostListener, OnInit, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  @Input() 
  @HostBinding('style.color') //<=> <h1 appHighlight color="blue" [style.color]="color" <== var color
  color = "green";

  @Input() 
  @HostBinding('style.background-color')
  background = "red";

  switchColor() : void {
    [this.background, this.color] = [this.color, this.background];
  }


  @HostListener("mouseenter") 
  @HostListener("mouseleave")
  onMouseEnter() : void {
    this.switchColor();
  }

}
