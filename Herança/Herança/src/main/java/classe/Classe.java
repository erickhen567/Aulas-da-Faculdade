package classe;

public class Classe {
    private String nome;
    private int idade;

    public Classe(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public void exibir() {
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
    }

    public static void main(String[] args) {
        Classe obj = new Classe("POO", 30); 
        obj.exibir();  
    }
}