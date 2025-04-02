public class Pessoa {
    private String nome;
    private int idade;
    
    //definição de um construtor da classe
    public Pessoa(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }
    //definir construtores com somente alguns parâmetros
    // sobrecarga 
    public Pessoa(String nome){
        this.nome = nome;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public String getNome(){
        return this.nome;
    }
    public void setIdade(int idade){
        this.idade = idade;
    }
    public int getIdade(){
        return this.idade;
    }
    
}
