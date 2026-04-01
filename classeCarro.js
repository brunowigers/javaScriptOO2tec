class carro{
    constructor(marca, nome, ano ){
        this.marca = marca ;
        this.nome = nome;
        this.ano = ano; 
    }

 apresentação(){
        console.log(`Olá meu carro é um ${this.nome}!, é da marca ${this.marca}, do ano ${this.ano}.`)
     }

}
let carro1 = new carro ("FIAT", "UNO", 2011);
carro1.apresentação();