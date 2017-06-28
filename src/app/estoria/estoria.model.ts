import { Tarefa } from  './../tarefa/Tarefa';
export class Estoria {
    id: number;
    titulo: string;
    pontos: number;
    descricao: string; 
    tarefas: Tarefa[];
}