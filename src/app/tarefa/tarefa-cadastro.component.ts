
import { Component, Input} from "@angular/core";
import { EstoriaSevice } from './../estoria/estoria.service';
import { Tarefa } from './tarefa';
import { Estoria } from './../estoria/estoria.model'

@Component({
    moduleId: module.id,
    templateUrl: "./tarefa-cadastro.component.html",
    selector: "tarefa-cadastro"
})
export class TarefaCadastroComponent {

    @Input()
    estoria: Estoria;

    @Input() 
    tarefa: Tarefa;

    constructor(private _estoriaService: EstoriaSevice) {
        this.tarefa = {"titulo":"", "descricao":""}
    }

    adicionarTarefa() {

        this.estoria.tarefas.push(this.tarefa);

        this._estoriaService.atualizarEstoria(this.estoria);
    }
}