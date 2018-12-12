import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: string|number, args?: any): number {
    
    if(typeof value === "string") {
      return parseInt(value, 10)**2;
    }
    return value**2;
  }

}
