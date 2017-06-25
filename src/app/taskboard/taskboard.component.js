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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var TaskboardComponent = (function () {
    function TaskboardComponent(_http) {
        this._http = _http;
        this.estorias = [];
    }
    TaskboardComponent.prototype.ngOnInit = function () {
        console.log("Iniciou ...");
        this._getEstorias();
        var titulo = this._getTitulo(this.estorias.length);
    };
    /*componentWillMount() {
        this._buscarEstorias();
    }*/
    TaskboardComponent.prototype._buscarEstorias = function () {
        /*jQuery.ajax({
            method: 'GET',
            url: 'http://localhost:3001/estorias',
            success: estorias => this.setState({estorias})
        });*/
        var _this = this;
        var api = 'http://localhost:3001/estorias';
        this._http
            .get(api)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (dado) {
            console.log("dado: " + dado);
            _this.estorias = dado;
            console.log(_this.estorias);
        });
        /*.then(dado => new Estoria(dado.id, dado.titulo, dado.pontos, dado.descricao));*/
    };
    /*_adicionarEstoria(estoria: Estoria) {
        jQuery.post('http://localhost:3001/estorias', estoria)
            .done(novaEstoria => {
                this.setState({estorias: this.state.estorias.concat([novaEstoria])}
            );
        });
    }*/
    TaskboardComponent.prototype._getEstorias = function () {
        this._buscarEstorias();
        /*return this.state.estorias.map(estoria =>
            <Estoria
                titulo={estoria.titulo} descricao={estoria.descricao}
                pontos={estoria.pontos} key={estoria.id}
                id={estoria.id}
                onDelete={this._excluirEstoria.bind(this)}/>);*/
    };
    TaskboardComponent.prototype._getTitulo = function (totalDeEstorias) {
        var titulo;
        if (totalDeEstorias === 0) {
            titulo = "Backlog vazio";
        }
        else if (totalDeEstorias === 1) {
            titulo = "1 estória";
        }
        else {
            titulo = totalDeEstorias + " est\u00F3rias";
        }
        return titulo;
    };
    TaskboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "taskboard.component.html",
            selector: "taskboard"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskboardComponent);
    return TaskboardComponent;
}());
exports.TaskboardComponent = TaskboardComponent;
//# sourceMappingURL=taskboard.component.js.map