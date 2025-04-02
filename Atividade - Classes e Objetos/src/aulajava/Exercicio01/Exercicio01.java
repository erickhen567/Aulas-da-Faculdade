package aulajava.Exercicio01;

import java.util.Scanner;

public class Exercicio01 {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o titulo:");
        String titulo = sc.nextLine();
        System.out.println("Digite o autor:");
        String autor = sc.nextLine();
        System.out.println("Digite o Numero de Paginas:");
        int numPag = sc.nextInt();
        
        Livro l = new Livro (titulo, autor, numPag);
        
        l.imprimirInfo();
    }
    
}
