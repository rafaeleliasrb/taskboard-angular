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
var estoria_service_1 = require('./estoria.service');
var estoria_model_1 = require('./estoria.model');
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var EstoriaComponent = (function () {
    function EstoriaComponent(_estoriaService) {
        this._estoriaService = _estoriaService;
        this.finalizaEstoria = new core_2.EventEmitter();
        this.isExibeTarefas = false;
    }
    EstoriaComponent.prototype.toggleTarefas = function () {
        this.isExibeTarefas = !this.isExibeTarefas;
    };
    EstoriaComponent.prototype.finalizarEstoria = function () {
        this.finalizaEstoria.emit();
    };
    EstoriaComponent.prototype.onAdicionaTarefa = function (tarefa) {
        var _this = this;
        this._estoriaService
            .adicionaTarefaNaEstoria(this.estoria, tarefa)
            .then(function (estoria) {
            _this.estoria = estoria;
        })
            .catch(function (error) { return _this.erroMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', estoria_model_1.Estoria)
    ], EstoriaComponent.prototype, "estoria", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], EstoriaComponent.prototype, "finalizaEstoria", void 0);
    EstoriaComponent = __decorate([
        core_2.Component({
            moduleId: module.id,
            templateUrl: './estoria.component.html',
            selector: 'estoria'
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaSevice])
    ], EstoriaComponent);
    return EstoriaComponent;
}());
exports.EstoriaComponent = EstoriaComponent;
//# sourceMappingURL=estoria.component.js.map