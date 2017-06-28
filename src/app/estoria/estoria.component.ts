import { Http } from '@angular/http';
import { Estoria } from './estoria.model';
import { Input } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl: "./estoria.component.html",
    selector: "estoria"
})
export class EstoriaComponent {
    @Input() estoria: Estoria;

    @Output()
    elementDeleted: EventEmitter<any> = new EventEmitter();

    private OCULTAR_DESCRICAO: string = "Ocultar Tarefas";
    private EXIBIR_DESCRICAO: string = "Tarefas";
    isExibeEstoria: boolean;
    textoBotao: string;

    constructor() {
        this.isExibeEstoria = false;
        this.textoBotao = this.EXIBIR_DESCRICAO;
    }

    toggleDescricao() {
        this.isExibeEstoria = !this.isExibeEstoria;
        this._alteraTextoBotao();
    }

    _alteraTextoBotao() {
        if(this.isExibeEstoria) {
            this.textoBotao = this.OCULTAR_DESCRICAO;
        }
        else {
            this.textoBotao = this.EXIBIR_DESCRICAO;
        }
    }

    deleteElement() {
        this.elementDeleted.emit();
    }
}