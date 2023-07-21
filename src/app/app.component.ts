import { DatePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FiltroPipe } from './pipes/filtro.pipe';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    dataAtual = new Date();
    json = { pdi: 'Angular', desafio: 'Pipes' };
    tecnologias = ['Angular', 'Python', 'Java', 'Kotlin'];
    texto = '';
    tecFiltrada = this.tecnologias;

    constructor(
        private datePipe: DatePipe,
        private filtroPipe: FiltroPipe
    ) {}

    mostrarData(): void {
        alert(this.datePipe.transform(this.dataAtual, 'dd/mm/yyyy'));
    }

    mostrarItem(filtro:any): any {
        // this.tecFiltrada = []
        // for (let i in this.tecnologias){
        //     if (this.filtroPipe.transform(this.tecnologias[i], filtro)) {
        //         this.tecFiltrada.push(this.tecnologias[i]);
        //         console.log(this.tecFiltrada)
        //     }
        // }
        this.tecFiltrada = this.tecnologias.filter((value) => this.filtroPipe.transform(value, filtro));
    }
}
