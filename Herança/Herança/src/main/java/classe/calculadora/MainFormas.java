package classe.calculadora;

import classe.calculadora.CalculadoraCientífica;

public class MainFormas {
    public static void main(String[] args) {
        CalculadoraCientífica calc = new CalculadoraCientífica();

        
        System.out.println("Soma: " + calc.somar(10, 5));
        System.out.println("Subtração: " + calc.subtrair(10, 5));
        System.out.println("Multiplicação: " + calc.multiplicar(10, 5));
        System.out.println("Divisão: " + calc.dividir(10, 5));

        
        System.out.println("Raiz quadrada de 25: " + calc.raizQuadrada(25));
        System.out.println("2 elevado a3: " +calc.potencia(2, 3));
    }
}