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
var core_1 = require("@angular/core");
var estoria_service_1 = require('./../estoria/estoria.service');
var tarefa_1 = require('./tarefa');
var estoria_model_1 = require('./../estoria/estoria.model');
var TarefaCadastroComponent = (function () {
    function TarefaCadastroComponent(_estoriaService) {
        this._estoriaService = _estoriaService;
        this.tarefa = { "titulo": "", "descricao": "" };
    }
    TarefaCadastroComponent.prototype.adicionarTarefa = function () {
        this.estoria.tarefas.push(this.tarefa);
        this._estoriaService.atualizarEstoria(this.estoria);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', estoria_model_1.Estoria)
    ], TarefaCadastroComponent.prototype, "estoria", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tarefa_1.Tarefa)
    ], TarefaCadastroComponent.prototype, "tarefa", void 0);
    TarefaCadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./tarefa-cadastro.component.html",
            selector: "tarefa-cadastro"
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaSevice])
    ], TarefaCadastroComponent);
    return TarefaCadastroComponent;
}());
exports.TarefaCadastroComponent = TarefaCadastroComponent;
//# sourceMappingURL=tarefa-cadastro.component.js.map