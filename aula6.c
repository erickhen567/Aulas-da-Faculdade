#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int main () {
    int aleatorio;
    int pontos;
    int sel = 1;

    srand(time(NULL));

    pontos = 10;
    while ((pontos > 0) && (sel != 0)) {
        aleatorio = rand()%11;

        printf("\n O numero sorteado e: %d", aleatorio);

        if (aleatorio == 0) 
        {
            printf("\n Game Over");
            pontos = 0;
        } 
        else if (aleatorio < 2) 
        {
        printf("\n Voce perdeu 10 pontos");
        pontos = pontos - 10;
        }
        else if (aleatorio < 4) 
        {
            printf("\n Voce perdeu 1 ponto");
            pontos = pontos - 1;
        }
        else if (aleatorio < 8)
        {
            printf("\n Voce nao perdeu nem ganhou nada");
        }
        else if (aleatorio < 10)
        {
            printf("\n Voce ganhou 10 pontos");
            pontos = pontos + 10;
        }
        else
        {
            printf("\n Voce ganhou 100 pontos");
            pontos = pontos + 100;
        }

        printf("\n Voce tem %d pontos", pontos);
        printf("\n Insira 0 para sair, qualquer outra coisa para continuar: ");
        scanf("%d", &sel);
    }

    return 0;
}