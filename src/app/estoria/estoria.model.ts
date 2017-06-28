import { Tarefa } from './../tarefa/tarefa.model';

export class Estoria {
    id: number;
    titulo: string;
    pontos: number;
    descricao: string;
    finalizada: boolean;
    tarefas: Tarefa[] = [];

    constructor(estoria: any = null) {
        if(estoria) {
            this.id = estoria.id;
            this.titulo = estoria.titulo;
            this.pontos = estoria.pontos;
            this.descricao = estoria.descricao;
            this.finalizada = estoria.finalizada;
            this.tarefas = estoria.tarefas;
        }
    }

    finalizaEstoria(): void {
        this.finalizada = true;
    }

    adicionaTarefa(tarefa: Tarefa) {
        this.tarefas.push(tarefa);
    }
}