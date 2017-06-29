import { TarefaFormComponent } from './cadastrar-tarefa/tarefa.form.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstoriaComponent } from './estoria/estoria.component';
import { EstoriaForm } from './cadastrar-estoria/estoria.form';
import { EstoriaSevice } from './estoria/estoria.service';
import { routing } from './app.routes';
import { TaskboardComponent } from './taskboard/taskboard.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        EstoriaComponent,
        EstoriaForm,
        TaskboardComponent,
        TarefaComponent,
        TarefaFormComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    providers: [ EstoriaSevice ]
})
export class AppModule {}
