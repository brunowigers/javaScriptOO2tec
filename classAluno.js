class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    calcular_media() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
    obterStatos() {
        const media = this.calcular_media()

        if (media >= 7) {
            return "aprovado"
        } else if (media >= 5) {
            return "recuperação"
        } else {
            return "reprovado"
        }
    }
    exibirRelatorio() {
        console.log("////////////////////////////////")
        console.log(`Relatorio do aluno ${this.nome}`);
        console.log(`Matricula ${this.matricula}`);
        console.log(`Media Final ${this.calcular_media()}`);
        console.log(`Status ${this.obterStatos()}`);
        console.log("////////////////////////////////")
        

    }
}

let turma = [
    new Aluno(`Luiz`, `CGM5050`, [7.2, 6.5, 7.2]),
    new Aluno(`Bruno`, `CGM5051`, [9.2, 8.9, 9.8]),
    new Aluno(`Pietro`, `CGM5052`, [2.2, 3.5, 5.2]),
    new Aluno(`Cauan`, `CGM5053`, [8.2, 4.5, 9.2]),
    new Aluno(`Mailon`, `CGM5054`, [5.0, 6.5, 8.2]),

]

console.log(turma[1]);

for(let i = 0; i < turma.length; i++ ){
turma[i].exibirRelatorio();
}


//let aluno1 = new Aluno("Meio Kilo", 55050, [8.0, 5.7, 9.9]);
//console.log(aluno1.calcular_media());
//console.log(aluno1.obterStatos());
//aluno1.exibirRelatorio();
