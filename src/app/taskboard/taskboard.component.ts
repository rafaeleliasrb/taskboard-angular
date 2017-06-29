import { EstoriaSevice } from './../estoria/estoria.service';
import { Http } from '@angular/http';
import { Estoria } from './../estoria/estoria.model';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'taskboard.component.html',
    selector: 'taskboard'
})
export class TaskboardComponent {
    estorias: Estoria[];
    erroMessage: Error;
    titulo: string;

    constructor(
        private _http: Http,
        private _estoriaService: EstoriaSevice) {
        this.estorias = [];
    }

    ngOnInit() {
        this._inicializaTaskboard();
        /*
        TODO: como chamar esse metodo so depois do de cima, ja q é assincrono
        this._getTitulo();
        */
    }
    onFinalizaEstoria(estoria: Estoria) {
        this._estoriaService
            .finalizaEstoria(estoria)
            .then(() => {
                let index = this.estorias.findIndex(item => item.id === estoria.id);
                this.estorias.splice(index, 1);
                this._getTitulo();
            })
            .catch(error => this.erroMessage = <any>error);
    }

    onElementAdd(estoria: Estoria) {
        this._estoriaService.adicionarEstoria(estoria)
            .then((estoriaAdicionada) => {
                this.estorias.push(estoriaAdicionada);
                this._getTitulo();
            })
            .catch(error => this.erroMessage = <any>error);
    }

     _inicializaTaskboard() {
         this._estoriaService
            .buscarEstorias()
            .then(estorias => {
                this.estorias = estorias.filter(estoria => !estoria.finalizada);
                this._getTitulo();
            })
            .catch(error => this.erroMessage = <any>error);
    }

    _getTitulo() {
        let totalDeEstorias: number = this.estorias.length;
        if (totalDeEstorias === 0) {
            this.titulo = 'Backlog vazio';
        } else if (totalDeEstorias === 1) {
            this.titulo = '1 estória';
        } else {
            this.titulo = `${totalDeEstorias} estórias`;
        }
    }
}
