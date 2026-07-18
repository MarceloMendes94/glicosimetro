export interface Usuario_interface {
  id: string;
  nome: string;
  data_nascimento: string;
}

export class Usuario implements Usuario_interface {
    id: string;
    nome: string;
    data_nascimento: string;
    constructor(id: string, nome: string, data_nascimento: string) {
        this.id = id;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
    }
    calcularIdade(): number {
        const nascimento = new Date(this.data_nascimento);
        const hoje = new Date();

        let idade = hoje.getFullYear() - nascimento.getFullYear();

        const mesAtual = hoje.getMonth();
        const diaAtual = hoje.getDate();

        const mesNascimento = nascimento.getMonth();
        const diaNascimento = nascimento.getDate();

        // Verifica se ainda não fez aniversário neste ano
        if (
            mesAtual < mesNascimento ||
            (mesAtual === mesNascimento && diaAtual < diaNascimento)
        ) {
            idade--;
        }

        return idade;
    }

}