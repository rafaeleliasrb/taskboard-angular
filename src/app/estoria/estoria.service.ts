import { Tarefa } from './../tarefa/tarefa.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Estoria } from './estoria.model';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class EstoriaSevice {
    constructor(private _http: Http) {}

    buscarEstorias(): Promise<Estoria[]> {
        let api = 'http://localhost:3002/estorias';
        return this._http
            .get(api)
            .toPromise()
            .then(response => <Estoria[]>response.json())
            .catch(this._handlerError);
    }

    finalizaEstoria(estoria: Estoria): Promise<any> {
        estoria = new Estoria(estoria);
        estoria.finalizaEstoria();

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let api = `http://localhost:3002/estorias/${estoria.id}`;
        return this._http
            .put(api, JSON.stringify(estoria), {headers: headers})
            .toPromise()
            .then(response => <any>response.json())
            .catch(this._handlerError);
    }

    adicionarEstoria(estoria: Estoria): Promise<Estoria> {
        let api = `http://localhost:3002/estorias/`;
        return this._http
            .post(api, estoria)
            .toPromise()
            .then(response => <any>response.json())
            .catch(this._handlerError);
    }

    adicionaTarefaNaEstoria(estoria: Estoria, tarefa: Tarefa): Promise<Estoria> {
        estoria = new Estoria(estoria);
        estoria.adicionaTarefa(tarefa);

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let api = `http://localhost:3002/estorias/${estoria.id}`;
        return this._http
            .put(api, JSON.stringify(estoria), {headers: headers})
            .toPromise()
            .then(response => <Estoria>response.json())
            .catch(this._handlerError);
    }

    private _handlerError(error: Response | any) {
        return Observable.throw(error.json().error || 'Erro no servidor');
    }
}
