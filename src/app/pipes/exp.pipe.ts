import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(value: number, expoente: number = 2): unknown {
    return value**expoente;
  }

}
