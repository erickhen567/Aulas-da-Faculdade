public class Cachorro extends Animal {
    private String raça;

    
    public Cachorro(String nome, double peso, String raça) {
        super(nome, peso); 
        this.raça = raça;
    }

  
    public String getRaça() {
        return raça;
    }

    public void setRaça(String raça) {
        this.raça = raça;
    }

    
    @Override
    public String toString() {
        return super.toString() + ", Raca: " + raça;
    }
}
