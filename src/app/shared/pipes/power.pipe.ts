import { Pipe, PipeTransform } from '@angular/core';

// {{  3 | power:2}}  ==> 3 ^ 2

// 3 value, 2 is exponent
// {{  5 | power}}  ==> 5 ^ 1

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
