package classe;

public class Classe1 {
    private String nome;

    public Classe1(String nome) {
        this.nome = nome;
    }

    public void exibir() {
        System.out.println("Nome: " + nome);
    }

    public static void main(String[] args) {
        Classe1 obj = new Classe1("POO");
        obj.exibir();  
    }
}