import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o nome:");
        String nome = sc.nextLine();
        System.out.println("Digite a idade:");
        int idade = sc.nextInt();
        
        Pessoa p = new Pessoa(nome, idade);//contrutor padrão
        Pessoa p1 = new Pessoa(nome);
        
        System.out.println("Nome: "+p.getNome());
        System.out.println("Idade: "+p.getIdade());
        
    }
    
}
