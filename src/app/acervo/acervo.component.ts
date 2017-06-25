import { LivroService } from '../livro/livro.service';
import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { ACERVO } from '../livro/livros.mocks';

@Component({
    moduleId: module.id,
    selector: 'acervo',
    templateUrl: './acervo.component.html'
})
export class AcervoComponent {
  acervo: Livro[] = [];
  erroMessage: Error;

  constructor(
    private livroService: LivroService
  ) {}

  ngOnInit() {
    this.getLivros();
  }

  private getLivros(): void {
    this.livroService.getLivros()
      .then(livros => this.acervo = <Livro[]>livros)
      .catch(error => this.erroMessage = <any>error);
    /*this.livroService.getLivros()
      .subscribe(
        livros => this.acervo = <Livro[]> livros,
        error => this.erroMessage = <any> error
    );*/
  }

  totalDeLivros() {
      let total = 0;
      for (let livro of this.acervo){
        total += livro.emEstoque;
      }
      return total;
  }

  adicionarUmNoCarrinho(livro: Livro) {
    if(livro.quantidade < livro.emEstoque) {
      livro.quantidade++;
    }
  }
}