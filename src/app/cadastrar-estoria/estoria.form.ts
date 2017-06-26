
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Estoria } from "../estoria/estoria.model";

@Component({
    moduleId: module.id,
    templateUrl: "./estoria.form.html",
    selector: "estoriaForm"
})
export class EstoriaForm {
    @Output() 
    adicionaEstoria: EventEmitter<Estoria> = new EventEmitter<Estoria>();
    
    estoria: Estoria = new Estoria();
    
    constructor() {}

    adicionarEstoria() {
        this.adicionaEstoria.emit(this.estoria);
        console.log("Form adicionar... " + JSON.stringify(this.estoria));
    }
}