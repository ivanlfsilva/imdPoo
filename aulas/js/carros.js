var Carros = /** @class */ (function () {
    function Carros() {
    }
    Object.defineProperty(Carros.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carros.prototype, "placa", {
        get: function () {
            return this._placa;
        },
        set: function (placa) {
            this._placa = placa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carros.prototype, "kilometragem", {
        get: function () {
            return this._kilometragem;
        },
        set: function (kilometragem) {
            this._kilometragem = kilometragem;
        },
        enumerable: false,
        configurable: true
    });
    return Carros;
}());
var fiat147 = new Carros();
fiat147.modelo = '147';
console.log(fiat147.modelo);
fiat147.placa = 'MKV-G786';
console.log(fiat147.placa);
fiat147.kilometragem = '35.000 KM';
console.log(fiat147.kilometragem);
