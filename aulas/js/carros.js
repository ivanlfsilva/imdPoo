var Carros = /** @class */ (function () {
    function Carros() {
    }
    Carros.prototype.getModelo = function () {
        return this.modelo;
    };
    Carros.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carros.prototype.getPlaca = function () {
        return this.placa;
    };
    Carros.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Carros.prototype.getKilometragem = function () {
        return this.kilometragem;
    };
    Carros.prototype.setKilometragem = function (kilometragem) {
        this.kilometragem = kilometragem;
    };
    return Carros;
}());
var fiat147 = new Carros();
fiat147.setModelo("fiat 500");
console.log(fiat147.getModelo());
