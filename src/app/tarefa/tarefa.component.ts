import { Http } from '@angular/http';
import { Http } from '@angular/http';
import { Component, Input } from '@angular/core';
import {Tarefa} from './tarefa';

@Component({
    moduleId: module.id,
    templateUrl: "./tarefa.component.html",
    selector: "tarefa"
})
export class TarefaComponent {
    @Input() tarefa: Tarefa;
}