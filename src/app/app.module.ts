import { EstoriaSevice } from './estoria/estoria.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EstoriaComponent } from './estoria/estoria.component';
import { routing } from './app.routes';
import { TaskboardComponent } from './taskboard/taskboard.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ 
        AppComponent, 
        TaskboardComponent,
        EstoriaComponent ],
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    providers: [ EstoriaSevice ]
})
export class AppModule {}