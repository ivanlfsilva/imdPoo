export class Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getSobrenome(): string {
    return this.sobrenome;
  }

  setSobrenome(sobrenome: string): void {
    this.sobrenome = sobrenome;
  }

  getIdade(): number {
    return this.idade;
  }

  setIdade(idade: number): void {
    this.idade = idade;
  }

  imprimirInfomacoes() {
    console.log(`Nome: ${this.nome} Sobrenome: ${this.sobrenome} Idade: ${this.idade}`)
  }
}

let cantor = new Pessoa();
cantor.setNome("Steve")
cantor.setSobrenome("Perry")
cantor.setIdade(72)
cantor.imprimirInfomacoes()

