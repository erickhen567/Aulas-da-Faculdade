package gestaopessoasproject;

public class TestePessoa {
    public static void main(String[] args) {
        
        Gerente empregado = new Gerente("Joao", 30, "Masculino", 3000.0, 101, 0.1, "Gerencia de Vendas");
        Gerente gerente = new Gerente("Maria", 40, "Feminino", 5000.0, 101, 0.1, "Gerencia de Vendas");
        Vendedor vendedor = new Vendedor("Carlos", 25, "Masculino", 2000.0, 101, 0.1, 15000.0, 0.05);
        Cliente cliente = new Cliente("Ana", 35, "Feminino", 2000.0, 1986);
        Fornecedor fornecedor = new Fornecedor("Jose", 45, "Masculino", 10000.0, 5000.0);

        
        System.out.println(empregado);
        System.out.println(gerente);
        System.out.println(vendedor);
        System.out.println(cliente);
        System.out.println(fornecedor);

        
        System.out.println("INSS de " + empregado.getNome() + ": " + empregado.valorInss());
    }
}
