package gestaopessoasproject;

public class Gerente extends Empregado {
    private String nomeGerencia;

    
    public Gerente(String nome, int idade, String sexo, double salarioBase, int codigoSetor, double imposto, String nomeGerencia) {
        super(nome, idade, sexo, salarioBase, codigoSetor, imposto);
        this.nomeGerencia = nomeGerencia;
    }

   
    public String getNomeGerencia() {
        return nomeGerencia;
    }

    public void setNomeGerencia(String nomeGerencia) {
        this.nomeGerencia = nomeGerencia;
    }

    
    @Override
    public double calcularSalario() {
        return super.getSalarioBase() + 1000; 
    }

    @Override
    public String toString() {
        return super.toString() + ", Nome da Gerencia: " + nomeGerencia;
    }
}
