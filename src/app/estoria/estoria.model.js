"use strict";
var Estoria = (function () {
    function Estoria(estoria) {
        if (estoria === void 0) { estoria = null; }
        this.tarefas = [];
        if (estoria) {
            this.id = estoria.id;
            this.titulo = estoria.titulo;
            this.pontos = estoria.pontos;
            this.descricao = estoria.descricao;
            this.finalizada = estoria.finalizada;
            this.tarefas = estoria.tarefas;
        }
    }
    Estoria.prototype.finalizaEstoria = function () {
        this.finalizada = true;
    };
    Estoria.prototype.adicionaTarefa = function (tarefa) {
        this.tarefas.push(tarefa);
    };
    return Estoria;
}());
exports.Estoria = Estoria;
//# sourceMappingURL=estoria.model.js.map