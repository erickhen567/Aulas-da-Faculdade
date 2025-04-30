package concessionariaproject;

public class Motocicleta extends Veiculo {
    private String tipoDeGuidao;

    
    public Motocicleta(String marca, String modelo, int ano, String cor, String tipoDeGuidao) {
        super(marca, modelo, ano, cor); 
        this.tipoDeGuidao = tipoDeGuidao;
    }

   
    public String getTipoDeGuidao() {
        return tipoDeGuidao;
    }

    public void setTipoDeGuidao(String tipoDeGuidao) {
        this.tipoDeGuidao = tipoDeGuidao;
    }

    
    @Override
    public String informacoes() {
        return super.informacoes() + ", Tipo de Guidao: " + tipoDeGuidao;
    }
}
