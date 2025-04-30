package classe.formas;

import classe.formas.Retangulo;
import classe.formas.Quadrado;
import classe.formas.Forma;
import classe.formas.Circulo;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Forma[] formas = new Forma[5];
        Random random = new Random();

        for (int i = 0; i < formas.length; i++) {
            int tipo = random.nextInt(3); 

            switch (tipo) {
                case 0:
                    float lado = random.nextFloat(10) + 1;    
                    float altura = random.nextFloat(10) + 1;
                    formas[i] = new Retangulo(lado, altura);
                    System.out.println("Forma " + i + ": Retângulo");
                    break;
                case 1:
                    float raio = random.nextFloat(10) + 1;
                    formas[i] = new Circulo(raio);
                    System.out.println("Forma " + i + ": Círculo");
                    break;
                case 2:
                    float ladoQuadrado = random.nextFloat(10) + 1;
                    formas[i] = new Quadrado(ladoQuadrado);
                    System.out.println("Forma " + i + ": Quadrado");
                    break;
            }

            float area = formas[i].calcularArea();
            float perimetro = formas[i].calcularPerimetro();

            System.out.printf("Área: %.2f\n", area);
            System.out.printf("Perímetro: %.2f\n\n", perimetro);
        }
    }
}