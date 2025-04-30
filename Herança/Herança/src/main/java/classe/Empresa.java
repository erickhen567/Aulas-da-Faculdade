package classe;

import java.util.Scanner;

public class Empresa {
    protected String nome;
    protected String endereco;
    protected String cidade;
    protected String estado;
    protected String cep;
    protected String fone;

   
    public Empresa() {
    }

    
    public Empresa(String nome, String endereco, String cidade, String estado, String cep, String fone) {
        this.nome = nome;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.fone = fone;
    }


    public void get() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nome: ");
        nome = sc.nextLine();
        System.out.print("Endereço: ");
        endereco = sc.nextLine();
        System.out.print("Cidade: ");
        cidade = sc.nextLine();
        System.out.print("Estado: ");
        estado = sc.nextLine();
        System.out.print("CEP: ");
        cep = sc.nextLine();
        System.out.print("Fone: ");
        fone = sc.nextLine();
    }

    
    public void print() {
        System.out.println("---- Dados da Empresa ----");
        System.out.println("Nome: " + nome);
        System.out.println("Endereço: " + endereco);
        System.out.println("Cidade: " + cidade);
        System.out.println("Estado: " + estado);
        System.out.println("CEP: " + cep);
        System.out.println("Fone: "+ fone);
    }
}