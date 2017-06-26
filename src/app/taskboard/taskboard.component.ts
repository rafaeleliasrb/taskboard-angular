import { EstoriaSevice } from './../estoria/estoria.service';
import { Http } from '@angular/http';
import { Estoria } from './../estoria/estoria.model';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: "taskboard.component.html",
    selector: "taskboard"
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
        console.log("Iniciou ...");
        this._inicializaTaskboard();
        //como chamar esse metodo so depois do de cima, ja q é assincrono
        //this._getTitulo();
    }
    
    onElementDeleted(estoria: Estoria) {
        this._estoriaService
            .excluirEstoria(estoria)
            .then(() => {
                let index = this.estorias.findIndex(item => item.id===estoria.id);
                this.estorias.splice(index, 1);
                this._getTitulo();
            })
            .catch(error => this.erroMessage = <any>error);
    }

    /*_adicionarEstoria(estoria: Estoria) {
        jQuery.post('http://localhost:3001/estorias', estoria)
            .done(novaEstoria => {
                this.setState({estorias: this.state.estorias.concat([novaEstoria])}
            );
        }); 
    }*/

     _inicializaTaskboard() {
         this._estoriaService
            .buscarEstorias()
            .then(estorias => {
                this.estorias = estorias;
                this._getTitulo();
            })
            .catch(error => this.erroMessage = <any>error);
    }

    _getTitulo() {
        let totalDeEstorias: number = this.estorias.length;
        if(totalDeEstorias === 0) {
            this.titulo = "Backlog vazio";
        }
        else if(totalDeEstorias === 1) {
            this.titulo = "1 estória";
        }
        else {
            this.titulo = `${totalDeEstorias} estórias`;
        }
    }

    /*componentDidMount() {
        this._timer = setInterval(() => this._buscarEstorias(), 5000);
    }*/

    /*componentWillUnmount() {
        console.log("Limpando o interval...");
        clearInterval(this._timer);
    }*/

    /*_excluirEstoria(idEstoria: number) {
        jQuery.ajax({
            method: 'DELETE',
            url: `http://localhost:3001/estorias/${idEstoria}`
        });
        
        this.setState({estorias: this.state.estorias.filter(item => item.id !== idEstoria)});
    }*/
}