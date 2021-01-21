class Carros {
  private modelo: string;
  private placa: string;
  private kilometragem: number;

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

    public getKilometragem(): number {
        return this.kilometragem;
    }

    public setKilometragem(kilometragem: number): void {
        this.kilometragem = kilometragem;
    }

}

var fiat147 = new Carros()
fiat147.setModelo("fiat 500")
console.log(fiat147.getModelo())
