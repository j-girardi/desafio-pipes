import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centopeia'
})
export class CentopeiaPipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value){
      return null;
    }
  
    // let texto = value.toLowerCase().split('');
    // for (let i = 0; i < texto.length; i++){
    //   if (i % 2 == 0) {
    //     texto[i] = texto[i].toUpperCase();
    //   }
    // }

    return value.split('').map((e, i)=> i % 2 === 0 ? e.toUpperCase(): e).join('')
  }

}
