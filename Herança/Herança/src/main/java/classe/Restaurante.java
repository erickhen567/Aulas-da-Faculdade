package classe;

import java.util.Scanner;

public class Restaurante extends Empresa {
    private String tipoComida;
    private double precoMedio;

    public Restaurante() {
        super();
    }

    public Restaurante(String nome, String endereco, String cidade, String estado, String cep, String fone, String tipoComida, double precoMedio) {
        super(nome, endereco, cidade, estado, cep, fone);
        this.tipoComida = tipoComida;
        this.precoMedio = precoMedio;
    }

    @Override
    public void get() {
        super.get(); 
        Scanner sc = new Scanner(System.in);
        System.out.print("Tipo de comida: ");
        tipoComida = sc.nextLine();
        System.out.print("Preço médio: ");
        precoMedio = sc.nextDouble();
    }

    @Override
    public void print() {
        super.print(); 
        System.out.println("Tipo de Comida: " + tipoComida);
        System.out.println("Preço Médio: R$ " + precoMedio);
    }
}