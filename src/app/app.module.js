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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var estoria_component_1 = require('./estoria/estoria.component');
var estoria_form_1 = require("./cadastrar-estoria/estoria.form");
var estoria_service_1 = require('./estoria/estoria.service');
var app_routes_1 = require('./app.routes');
var taskboard_component_1 = require('./taskboard/taskboard.component');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                estoria_component_1.EstoriaComponent,
                estoria_form_1.EstoriaForm,
                taskboard_component_1.TaskboardComponent
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing],
            providers: [estoria_service_1.EstoriaSevice]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map