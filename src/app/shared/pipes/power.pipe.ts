import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: string|number, arg: string|number): number {

    var res = 0;
    
    if(typeof value === "string") {
      res = parseInt(value, 10);
    } else {
      res = value;
    }

    if(typeof arg === "string") {
      res = res ** parseInt(arg, 10);
    } else {
      res = res ** arg;
    }

    return res;
  }

}
