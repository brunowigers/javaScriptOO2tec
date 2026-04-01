class pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    saudar(){
        console.log(`Olá meu nome é ${this.nome}!, tenho ${this.idade} anos, e trabalho com ${this.profissao}.`)
         }
felizAniversario(){
    this.idade += 1;
    console.log(`feliz Aniversario ${this.nome}! agora você tem ${this.idade} anos. `)
   }
}

let pessoa1 = new pessoa ("Xandão", 29, "eletricista");
pessoa1.saudar();
pessoa1.felizAniversario();