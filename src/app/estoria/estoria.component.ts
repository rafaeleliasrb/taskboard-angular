import { Estoria } from './estoria.model';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl: "./estoria.component.html",
    selector: "estoria"
})
export class EstoriaComponent {
    @Input() estoria: Estoria;
    private OCULTAR_DESCRICAO: string = "Ocultar descrição";
    private EXIBIR_DESCRICAO: string = "Exibir descrição";
    isExibeEstoria: boolean;
    textoBotao: string;

    constructor() {
        this.isExibeEstoria = false;
        this.textoBotao = this.OCULTAR_DESCRICAO;
    }

    toggleDescricao() {
        if(this.isExibeEstoria) {
            this.textoBotao = this.OCULTAR_DESCRICAO;
        }
        else {
            this.textoBotao = this.EXIBIR_DESCRICAO;
        }
        this.isExibeEstoria = !this.isExibeEstoria;
    }

    excluirEstoria() {
        console.log("Excluir estoria...");
    }
}