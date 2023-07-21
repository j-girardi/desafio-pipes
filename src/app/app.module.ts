import { DatePipe, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CentopeiaPipe } from './pipes/centopeia.pipe';
import { ExpPipe } from './pipes/exp.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';

registerLocaleData(ptBr);

@NgModule({
    declarations: [AppComponent, CentopeiaPipe, ExpPipe, FiltroPipe],
    imports: [BrowserModule, FormsModule],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        CentopeiaPipe,
        ExpPipe,
        DatePipe,
        FiltroPipe
],
    bootstrap: [AppComponent],
})
export class AppModule {}
