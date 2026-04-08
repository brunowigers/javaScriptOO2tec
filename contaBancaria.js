class contaBancaria{
      #saldo = 0;

      constructor(titular){
        this.titular = titular
      }
     
      depositar(valor){
        if(valor >0){
            this.#saldo += valor;
            console.log(`depósito de ${valor} feito.`);
        }
      }
      sacar(valor){
        if (valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor}feito.`);
        }else{
            console.log("Saldo insuficiente ou valr invalido.")
        }
      }

      exibirSaldo (){
        return `olá, seu saldo é ${this.#saldo}`
      }
}

  const conta1 = new contaBancaria("Nicolal");
  conta1.depositar(1000)
  console.log (conta1.exibirSaldo())