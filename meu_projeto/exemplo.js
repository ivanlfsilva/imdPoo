"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getSobrenome = function () {
        return this.sobrenome;
    };
    Pessoa.prototype.setSobrenome = function (sobrenome) {
        this.sobrenome = sobrenome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.imprimirInfomacoes = function () {
        console.log("Nome: " + this.nome + " Sobrenome: " + this.sobrenome + " Idade: " + this.idade);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var cantor = new Pessoa();
cantor.setNome("Steve");
cantor.setSobrenome("Perry");
cantor.setIdade(72);
cantor.imprimirInfomacoes();
