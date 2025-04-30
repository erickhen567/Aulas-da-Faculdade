package gestaopessoasproject;

public abstract class Empregado extends Pessoa {
    private double salarioBase;
    private int codigoSetor;
    private double imposto;

    
    public Empregado(String nome, int idade, String sexo, double salarioBase, int codigoSetor, double imposto) {
        super(nome, idade, sexo);
        this.salarioBase = salarioBase;
        this.codigoSetor = codigoSetor;
        this.imposto = imposto;
    }

    
    public double getSalarioBase() {
        return salarioBase;
    }

    public void setSalarioBase(double salarioBase) {
        this.salarioBase = salarioBase;
    }

    public int getCodigoSetor() {
        return codigoSetor;
    }

    public void setCodigoSetor(int codigoSetor) {
        this.codigoSetor = codigoSetor;
    }

    public double getImposto() {
        return imposto;
    }

    public void setImposto(double imposto) {
        this.imposto = imposto;
    }

   
    public double valorInss() {
        return salarioBase * 0.11; 
    }

   
    public abstract double calcularSalario();

    @Override
    public String toString() {
        return super.toString() + ", Salario Base: " + salarioBase + ", Imposto: " + imposto;
    }
}
