package forma;

public class Teste {
    public static void main(String[] args) {
    
        Forma[] formas = {
                            new Circulo(),
                            new Retangulo(),
                            new Triangulo()
                            
        };
        for(int i = 0; i < formas.length; i++){
            formas[i].desenhar();
            if(formas[i] instanceof Circulo){
                System.out.println("Circulo");
            }else if(formas[i] instanceof Retangulo){
                System.out.println("Retangulo");
            }else{
                System.out.println("Triangulo");
            }
        }
    
    }
    
}