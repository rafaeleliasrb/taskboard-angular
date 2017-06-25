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

    constructor(private _http: Http) {
        this.estorias = [];
    }

    ngOnInit() {
        console.log("Iniciou ...");
        this._getEstorias();
        const titulo = this._getTitulo(this.estorias.length);
    }

    /*componentWillMount() {
        this._buscarEstorias();
    }*/

    _buscarEstorias() {
        /*jQuery.ajax({
            method: 'GET',
            url: 'http://localhost:3001/estorias',
            success: estorias => this.setState({estorias})
        });*/

        let api: string = 'http://localhost:3001/estorias';
        this._http
            .get(api)
            .map(res => res.json())
            .toPromise()
            .then(dado => {
                console.log("dado: " + dado);
                this.estorias = dado;
                console.log(this.estorias);
            })
            /*.then(dado => new Estoria(dado.id, dado.titulo, dado.pontos, dado.descricao));*/
    }

    /*_adicionarEstoria(estoria: Estoria) {
        jQuery.post('http://localhost:3001/estorias', estoria)
            .done(novaEstoria => {
                this.setState({estorias: this.state.estorias.concat([novaEstoria])}
            );
        }); 
    }*/

     _getEstorias() {
         this._buscarEstorias();
        /*return this.state.estorias.map(estoria => 
            <Estoria 
                titulo={estoria.titulo} descricao={estoria.descricao}
                pontos={estoria.pontos} key={estoria.id}
                id={estoria.id}
                onDelete={this._excluirEstoria.bind(this)}/>);*/
    }

    _getTitulo(totalDeEstorias: number) {
        let titulo: string;
        if(totalDeEstorias === 0) {
            titulo = "Backlog vazio";
        }
        else if(totalDeEstorias === 1) {
            titulo = "1 estória";
        }
        else {
            titulo = `${totalDeEstorias} estórias`;
        }
        return titulo;
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