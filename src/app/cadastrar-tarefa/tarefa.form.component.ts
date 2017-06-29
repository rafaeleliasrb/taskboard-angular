import { Tarefa } from './../tarefa/tarefa.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './tarefa.form.component.html',
    selector: 'tarefaForm'
})
export class TarefaFormComponent {
    @Output()
    adicionaTarefa: EventEmitter<Tarefa> = new EventEmitter<Tarefa>();
    tarefa: Tarefa = new Tarefa();

    adicionarTarefa() {
        this.adicionaTarefa.emit(this.tarefa);
        this.tarefa = new Tarefa();
    }
}
