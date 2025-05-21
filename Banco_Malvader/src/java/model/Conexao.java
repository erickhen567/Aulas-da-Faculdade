package model;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;

public class Conexao {
  
    //autenticacao com os dados de autenticacao
    String usuario = "root";
    String senha = "catolica";
    String url = "jdbc:mysql://localhost:3307/malvader";
    String driver = "com.mysql.cj.jdbc.Driver";
    
    Connection conexao = null;
    
    
    //metodo que estabelece a conexao
    public Connection conectar() throws ClassNotFoundException{
        try{
            //tentativa de conexao com o banco de dados
            if(conexao == null){
                Class.forName(driver);
                conexao = (Connection)DriverManager.getConnection(url, usuario, senha);
                System.out.println(conexao);
            }
        }catch(SQLException e){
            //apresentar o erro
            System.out.println("Erro Conexao");
            e.printStackTrace();
            e.getMessage();
        
        }

        return conexao;
    }
}