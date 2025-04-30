package gestaopessoasproject;

public class Cliente extends Pessoa {
    private double valorDivida;
    private int anoNascim;

    
    public Cliente(String nome, int idade, String sexo, double valorDivida, int anoNascim) {
        super(nome, idade, sexo);
        this.valorDivida = valorDivida;
        this.anoNascim = anoNascim;
    }

    
    public double getValorDivida() {
        return valorDivida;
    }

    public void setValorDivida(double valorDivida) {
        this.valorDivida = valorDivida;
    }

    public int getAnoNascim() {
        return anoNascim;
    }

    public void setAnoNascim(int anoNascim) {
        this.anoNascim = anoNascim;
    }

    @Override
    public String toString() {
        return super.toString() + ", Valor da Divida: " + valorDivida + ", Ano de Nascimento: " + anoNascim;
    }
}

