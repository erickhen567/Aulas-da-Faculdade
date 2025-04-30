package concessionariaproject;

public class Carro extends Veiculo {
    private int quantidadeDePortas;

    
    public Carro(String marca, String modelo, int ano, String cor, int quantidadeDePortas) {
        super(marca, modelo, ano, cor); 
        this.quantidadeDePortas = quantidadeDePortas;
    }

  
    public int getQuantidadeDePortas() {
        return quantidadeDePortas;
    }

    public void setQuantidadeDePortas(int quantidadeDePortas) {
        this.quantidadeDePortas = quantidadeDePortas;
    }

   
    @Override
    public String informacoes() {
        return super.informacoes() + ", Quantidade de Portas: " + quantidadeDePortas;
    }
}
