import { Directive } from '@angular/core';

@Directive({
  selector: '[appConnected]' //cible tous les balises qui ont un attribut appConnected
})
export class ConnectedDirective {

  constructor() { }

}
