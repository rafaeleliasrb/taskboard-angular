"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var EstoriaSevice = (function () {
    function EstoriaSevice(_http) {
        this._http = _http;
    }
    EstoriaSevice.prototype.buscarEstorias = function () {
        var api = 'http://localhost:3002/estorias';
        return this._http
            .get(api)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this._handlerError);
    };
    EstoriaSevice.prototype.excluirEstoria = function (estoria) {
        var api = "http://localhost:3002/estorias/" + estoria.id;
        return this._http
            .delete(api)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this._handlerError);
    };
    EstoriaSevice.prototype.adicionarEstoria = function (estoria) {
        var api = "http://localhost:3002/estorias/";
        return this._http
            .post(api, estoria)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this._handlerError);
    };
    EstoriaSevice.prototype.atualizarEstoria = function (estoria) {
        var api = "http://localhost:3002/estorias/" + estoria.id;
        return this._http
            .put(api, estoria)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this._handlerError);
    };
    EstoriaSevice.prototype._handlerError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Erro no servidor');
    };
    EstoriaSevice = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EstoriaSevice);
    return EstoriaSevice;
}());
exports.EstoriaSevice = EstoriaSevice;
//# sourceMappingURL=estoria.service.js.map