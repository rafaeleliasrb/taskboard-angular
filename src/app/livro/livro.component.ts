import { Component, Input } from "@angular/core";
import { Livro } from './livro';

@Component({
    moduleId: module.id,
    templateUrl: './livro.component.html',
    selector: 'livro'
})
export class LivroComponent {
    @Input() livro: Livro;
}