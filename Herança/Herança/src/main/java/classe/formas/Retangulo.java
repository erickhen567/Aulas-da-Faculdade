package classe.formas;

import classe.formas.Forma;

public class Retangulo extends Forma {
    protected float lado;
    protected float altura;

    public Retangulo(float lado, float altura) {
        this.lado = lado;
        this.altura = altura;
    }

    @Override
    public float calcularArea() {
        return lado * altura;
    }

    @Override
    public float calcularPerimetro() {
        return 2 * (lado + altura);
    }
}