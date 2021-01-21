class Carros {
  private modelo: string;
  private placa: string;
  private kilometragem: string;

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public getPlaca(): string {
    return this.placa;
  }

  public setPlaca(placa: string): void {
    this.placa = placa;
  }

  public getKilometragem(): string {
    return this.kilometragem;
  }

  public setKilometragem(kilometragem: string): void {
    this.kilometragem = kilometragem;
  }
}

var fiat147 = new Carros();
fiat147.setModelo("fiat 500");
console.log(fiat147.getModelo());
fiat147.setPlaca("MKV-G786");
console.log(fiat147.getPlaca());
fiat147.setKilometragem("35.000 KM");
console.log(fiat147.getKilometragem());
