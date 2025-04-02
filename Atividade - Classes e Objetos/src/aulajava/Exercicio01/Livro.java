package aulajava.Exercicio01;

public class Livro {
    private String titulo;
    private String autor;
    private int numPag;
    
    public Livro (String titulo, String autor, int numPag){
        this.titulo = titulo;
        this.autor = autor;
        this.numPag = numPag;
    }
    public Livro(String titulo){
        this.titulo = titulo;
    }
    public void setTitulo (String titulo){
        this.titulo = titulo;
    }
    public String getTitulo(){
        return this.titulo;
    }
    public void setAutor (String autor){
        this.autor = autor;
    }
    public String getAutor(){
        return this.autor;
    }
    public void setNumPag(int numPag){
        this.numPag = numPag;
    }
    public int getNumPag(){
        return this.numPag;
    }
    public void imprimirInfo(){
        System.out.println("Titulo: "+getTitulo());
        System.out.println("Autor: "+getAutor());
        System.out.println("Numero da Pagina: "+getNumPag());
        
    }
    
    
    
}
