export interface MedidaGlicose {
  data_hora: string;
  valor: number;
  momento: string;
}
export class Glicose implements MedidaGlicose{
  data_hora: string;
  valor: number;
  momento: string;

  constructor(data_hora: string, valor: number, momento: string) {
    this.data_hora = data_hora;
    this.valor = valor;
    this.momento = momento;
  }
  classificar(): string {
        if (this.valor < 100) {
            return "Normal";
        }

        if (this.valor < 126) {
            return "Pré-diabetes";
        }

        return "Alta";
    }
}