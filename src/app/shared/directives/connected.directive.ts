import { Directive, OnInit, ElementRef, HostBinding, HostListener, AfterContentChecked, Input } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Directive({
  selector: '[appConnected], [appNotConnected]' //cible tous les balises qui ont un attribut appConnected
})
export class ConnectedDirective implements AfterContentChecked {

  @Input() appConnected: boolean;
  @Input() appNotConnected: boolean;

  @HostBinding("class.hide") isHide = false;

  constructor(private userService : UserService) { }

  private isHidden() : boolean {
    return (this.appNotConnected != undefined && this.userService.isConnected ||
      this.appConnected != undefined && !this.userService.isConnected); 
  }

  ngAfterContentChecked() : void {
    this.isHide = this.isHidden();
  }

}
