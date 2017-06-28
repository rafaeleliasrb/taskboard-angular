import { Tarefa } from './tarefa.model';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: "./tarefa.component.html",
    selector: "tarefa"
})
export class TarefaComponent {
    @Input() tarefa: Tarefa;
}