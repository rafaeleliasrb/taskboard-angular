import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Estoria } from './estoria.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class EstoriaSevice {
    
    constructor(private _http: Http) {}

    buscarEstorias(): Promise<Estoria[]> {
        let api: string = 'http://localhost:3001/estorias';
        return this._http
            .get(api)
            .toPromise()
            .then(response => <Estoria[]>response.json())
            .catch(this._handlerError);
    }

    excluirEstoria(estoria: Estoria): Promise<any> {
        let api = `http://localhost:3001/estorias/${estoria.id}`;
        return this._http.delete(api)
            .toPromise()
            .then(response => <any>response.json())
            .catch(this._handlerError);
    }

    private _handlerError(error: Response | any) {
        return Observable.throw(error.json().error || 'Erro no servidor');
    }
}