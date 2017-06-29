import { Tarefa } from './../tarefa/tarefa.model';
import { EstoriaSevice } from './estoria.service';
import { Estoria } from './estoria.model';
import { Input } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl: './estoria.component.html',
    selector: 'estoria'
})
export class EstoriaComponent {
    @Input() estoria: Estoria;

    @Output()
    finalizaEstoria: EventEmitter<any> = new EventEmitter();

    isExibeTarefas: boolean;
    erroMessage: Error;

    constructor(private _estoriaService: EstoriaSevice) {
        this.isExibeTarefas = false;
    }

    toggleTarefas() {
        this.isExibeTarefas = !this.isExibeTarefas;
    }

    finalizarEstoria() {
        this.finalizaEstoria.emit();
    }

    onAdicionaTarefa(tarefa: Tarefa) {
        this._estoriaService
            .adicionaTarefaNaEstoria(this.estoria, tarefa)
            .then((estoria) => {
                this.estoria = estoria;
            })
            .catch(error => this.erroMessage = <any>error);
    }
}
