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
var estoria_service_1 = require('./../estoria/estoria.service');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var TaskboardComponent = (function () {
    function TaskboardComponent(_http, _estoriaService) {
        this._http = _http;
        this._estoriaService = _estoriaService;
        this.estorias = [];
    }
    TaskboardComponent.prototype.ngOnInit = function () {
        this._inicializaTaskboard();
        /*
        TODO: como chamar esse metodo so depois do de cima, ja q é assincrono
        this._getTitulo();
        */
    };
    TaskboardComponent.prototype.onFinalizaEstoria = function (estoria) {
        var _this = this;
        this._estoriaService
            .finalizaEstoria(estoria)
            .then(function () {
            var index = _this.estorias.findIndex(function (item) { return item.id === estoria.id; });
            _this.estorias.splice(index, 1);
            _this._getTitulo();
        })
            .catch(function (error) { return _this.erroMessage = error; });
    };
    TaskboardComponent.prototype.onElementAdd = function (estoria) {
        var _this = this;
        this._estoriaService.adicionarEstoria(estoria)
            .then(function (estoriaAdicionada) {
            _this.estorias.push(estoriaAdicionada);
            _this._getTitulo();
        })
            .catch(function (error) { return _this.erroMessage = error; });
    };
    TaskboardComponent.prototype._inicializaTaskboard = function () {
        var _this = this;
        this._estoriaService
            .buscarEstorias()
            .then(function (estorias) {
            _this.estorias = estorias.filter(function (estoria) { return !estoria.finalizada; });
            _this._getTitulo();
        })
            .catch(function (error) { return _this.erroMessage = error; });
    };
    TaskboardComponent.prototype._getTitulo = function () {
        var totalDeEstorias = this.estorias.length;
        if (totalDeEstorias === 0) {
            this.titulo = 'Backlog vazio';
        }
        else if (totalDeEstorias === 1) {
            this.titulo = '1 estória';
        }
        else {
            this.titulo = totalDeEstorias + " est\u00F3rias";
        }
    };
    TaskboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'taskboard.component.html',
            selector: 'taskboard'
        }), 
        __metadata('design:paramtypes', [http_1.Http, estoria_service_1.EstoriaSevice])
    ], TaskboardComponent);
    return TaskboardComponent;
}());
exports.TaskboardComponent = TaskboardComponent;
//# sourceMappingURL=taskboard.component.js.map