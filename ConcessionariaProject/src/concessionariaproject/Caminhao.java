package concessionariaproject;

public class Caminhao extends Veiculo {
    private double capacidadeDeCarga;

   
    public Caminhao(String marca, String modelo, int ano, String cor, double capacidadeDeCarga) {
        super(marca, modelo, ano, cor); 
        this.capacidadeDeCarga = capacidadeDeCarga;
    }

    
    public double getCapacidadeDeCarga() {
        return capacidadeDeCarga;
    }

    public void setCapacidadeDeCarga(double capacidadeDeCarga) {
        this.capacidadeDeCarga = capacidadeDeCarga;
    }

    
    @Override
    public String informacoes() {
        return super.informacoes() + ", Capacidade de Carga: " + capacidadeDeCarga + " kg";
    }
}
