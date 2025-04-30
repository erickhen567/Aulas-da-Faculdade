package classe.calculadora;

public class CalculadoraCientífica extends Calculadora {

    
    public double raizQuadrada(double valor) {
        if (valor < 0) {
            throw new ArithmeticException("Não é possível calcular raiz quadrada de número negativo.");
        }
        return Math.sqrt(valor);
    }

    
    public double potencia(double base, double expoente) {
        return Math.pow(base, expoente);
    }
}
