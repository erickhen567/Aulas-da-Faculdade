package concessionariaproject;

public class TesteVeiculos {
    public static void main(String[] args) {
        
        Carro carro = new Carro("Fusca", "Fusca 1500", 1970, "Azul", 4);
        
        Caminhao caminhao = new Caminhao("Volvo", "FH", 2022, "Preto", 25000);
        
        Motocicleta motocicleta = new Motocicleta("Harley-Davidson", "Street 750", 2020, "Preto", "Guiado Alto");

        
        System.out.println(carro);
        System.out.println(caminhao);
        System.out.println(motocicleta);
    }
}
