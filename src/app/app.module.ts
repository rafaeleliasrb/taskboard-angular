import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcervoComponent } from './acervo/acervo.component';
import { AppComponent } from './app.component';
import { EstoriaComponent } from './estoria/estoria.component';
import { LivroDataService } from './livro/livro-data.service';
import { LivroComponent } from "./livro/livro.component";
import { LivroService } from './livro/livro.service';
import { routing } from './app.routes';
import { SobrePageComponent } from './sobre/sobre-page.component';
import { TaskboardComponent } from './taskboard/taskboard.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ 
        AppComponent, 
        AcervoComponent, 
        SobrePageComponent, 
        LivroComponent,
        TaskboardComponent,
        EstoriaComponent ],
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    providers: [ LivroDataService, LivroService ]
})
export class AppModule {}