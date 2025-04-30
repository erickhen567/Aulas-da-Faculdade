package RPG;

public class RPGdeTurnoProject {

    public static void main(String[] args) {
        Personagem[] per = {
                            new Guerreiro(),
                            new Mago(),
                            new Arqueiro()
        };
        
        for(Personagem p : per){
        p.atacarInimigo();
    }

                               
    }
    
}