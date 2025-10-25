// Crie uma classe que modele um aluno de academia:
// Atributos: Nome, data de nascimento, peso e altura.
// Métodos: Calcula idade.

class aluno {
    nome: string;
    dataNascimento: string;
    peso: number;
    altura: number;

    constructor (nome: string, dataNascimento: string, peso: number, altura: number) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIdade(dataNascimento: number, dataAtual: number): void {
        
    }
}