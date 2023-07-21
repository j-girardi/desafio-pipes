import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, filtro: any): unknown {
    if (value.toLowerCase().search(filtro.toLowerCase()) === -1){
      return false;
    } else{
      return value;
    }
  }

}
