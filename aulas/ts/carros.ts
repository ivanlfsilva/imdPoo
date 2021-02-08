class Carros {
  private _modelo: string;
  private _placa: string;
  private _kilometragem: string;

  public get modelo(): string {
    return this._modelo;
  }

  public set modelo(modelo: string) {
    this._modelo = modelo;
  }

  public get placa(): string {
    return this._placa;
  }

  public set placa(placa: string) {
    this._placa = placa;
  }

  public get kilometragem(): string {
    return this._kilometragem;
  }

  public set kilometragem(kilometragem: string) {
    this._kilometragem = kilometragem;
  }
}

var fiat147 = new Carros();
fiat147.modelo = '147';
console.log(fiat147.modelo);
fiat147.placa = 'MKV-G786';
console.log(fiat147.placa);
fiat147.kilometragem = '35.000 KM';
console.log(fiat147.kilometragem);
