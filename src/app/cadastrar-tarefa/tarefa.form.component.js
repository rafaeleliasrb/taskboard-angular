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
var tarefa_model_1 = require('./../tarefa/tarefa.model');
var core_1 = require('@angular/core');
var TarefaFormComponent = (function () {
    function TarefaFormComponent() {
        this.adicionaTarefa = new core_1.EventEmitter();
        this.tarefa = new tarefa_model_1.Tarefa();
    }
    TarefaFormComponent.prototype.adicionarTarefa = function () {
        this.adicionaTarefa.emit(this.tarefa);
        this.tarefa = new tarefa_model_1.Tarefa();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TarefaFormComponent.prototype, "adicionaTarefa", void 0);
    TarefaFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./tarefa.form.component.html",
            selector: "tarefaForm"
        }), 
        __metadata('design:paramtypes', [])
    ], TarefaFormComponent);
    return TarefaFormComponent;
}());
exports.TarefaFormComponent = TarefaFormComponent;
//# sourceMappingURL=tarefa.form.component.js.map