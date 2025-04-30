package gestaopessoasproject;

public class Vendedor extends Empregado {
    private double valorVendas;
    private double comissao;

    
    public Vendedor(String nome, int idade, String sexo, double salarioBase, int codigoSetor, double imposto, double valorVendas, double comissao) {
        super(nome, idade, sexo, salarioBase, codigoSetor, imposto);
        this.valorVendas = valorVendas;
        this.comissao = comissao;
    }

    
    public double getValorVendas() {
        return valorVendas;
    }

    public void setValorVendas(double valorVendas) {
        this.valorVendas = valorVendas;
    }

    public double getComissao() {
        return comissao;
    }

    public void setComissao(double comissao) {
        this.comissao = comissao;
    }

    
    @Override
    public double calcularSalario() {
        return super.getSalarioBase() + (valorVendas * comissao); 
    }

    @Override
    public String toString() {
        return super.toString() + ", Valor das Vendas: " + valorVendas + ", Comissao: " + comissao;
    }
}
