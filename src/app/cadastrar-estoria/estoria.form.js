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
var estoria_model_1 = require("../estoria/estoria.model");
var EstoriaForm = (function () {
    function EstoriaForm() {
        this.adicionaEstoria = new core_1.EventEmitter();
        this.estoria = new estoria_model_1.Estoria();
    }
    EstoriaForm.prototype.adicionarEstoria = function () {
        this.adicionaEstoria.emit(this.estoria);
        console.log("Form adicionar... " + JSON.stringify(this.estoria));
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EstoriaForm.prototype, "adicionaEstoria", void 0);
    EstoriaForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./estoria.form.html",
            selector: "estoriaForm"
        }), 
        __metadata('design:paramtypes', [])
    ], EstoriaForm);
    return EstoriaForm;
}());
exports.EstoriaForm = EstoriaForm;
//# sourceMappingURL=estoria.form.js.map