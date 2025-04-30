package gestaopessoasproject;

public class Operario extends Empregado {
    private double valorProducao;
    private double comissao;

    
    public Operario(String nome, int idade, String sexo, double salarioBase, int codigoSetor, double imposto, double valorProducao, double comissao) {
        super(nome, idade, sexo, salarioBase, codigoSetor, imposto);
        this.valorProducao = valorProducao;
        this.comissao = comissao;
    }

    
    public double getValorProducao() {
        return valorProducao;
    }

    public void setValorProducao(double valorProducao) {
        this.valorProducao = valorProducao;
    }

    public double getComissao() {
        return comissao;
    }

    public void setComissao(double comissao) {
        this.comissao = comissao;
    }

    
    @Override
    public double calcularSalario() {
        return super.getSalarioBase() + (valorProducao * comissao); 
    }

    @Override
    public String toString() {
        return super.toString() + ", Valor da Producao: " + valorProducao + ", Comissao: " + comissao;
    }
}
