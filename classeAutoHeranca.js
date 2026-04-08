class Automovel{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirDetalhes(){
return `${this.marca}, ${this.modelo}, ${this.ano}`
    }
}

class carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
  exibirDetalhes(){
    return `${super.exibirDetalhes()}, portas: ${this.portas}`;
    }
 }


class moto extends Automovel{
    constructor(marca, modelo, ano, cilindradas){
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }
exibirDetalhes(){
    return `${super.exibirDetalhes()}, cilindradas: ${this.cilindradas}`;
    }

}

let carro1 = new carro ("FIAT", "UNO", 2011, 4);
carro1.exibirDetalhes();
