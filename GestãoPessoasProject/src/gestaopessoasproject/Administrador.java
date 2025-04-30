package gestaopessoasproject;

public class Administrador extends Empregado {
    private double ajudaDeCusto;

    
    public Administrador(String nome, int idade, String sexo, double salarioBase, int codigoSetor, double imposto, double ajudaDeCusto) {
        super(nome, idade, sexo, salarioBase, codigoSetor, imposto);
        this.ajudaDeCusto = ajudaDeCusto;
    }

    
    public double getAjudaDeCusto() {
        return ajudaDeCusto;
    }

    public void setAjudaDeCusto(double ajudaDeCusto) {
        this.ajudaDeCusto = ajudaDeCusto;
    }

    
    @Override
    public double calcularSalario() {
        return super.getSalarioBase() + ajudaDeCusto; 
    }

    @Override
    public String toString() {
        return super.toString() + ", Ajuda de Custo: " + ajudaDeCusto;
    }
}
