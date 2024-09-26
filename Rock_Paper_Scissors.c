#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int jogador, computador;
    int vitoriasJogador = 0, vitoriasComputador = 0;
    char *opcoes[] = {"Pedra", "Papel", "Tesoura"};
    
    srand(time(NULL));

    while (1) {
        printf("\nEscolha uma opcao:\n");
        printf("1 - Pedra\n");
        printf("2 - Papel\n");
        printf("3 - Tesoura\n");
        printf("Qualquer outro numero para Sair\n");
        
        scanf("%d", &jogador);

        if (jogador < 1 || jogador > 3) {
            printf("Saindo do jogo...\n");
            break;
        }

    
        computador = rand() % 3 + 1;

        printf("Voce escolheu: %s\n", opcoes[jogador - 1]);
        printf("Computador escolheu: %s\n", opcoes[computador - 1]);


        if (jogador == computador) {
            printf("Empate!\n");
        } else if ((jogador == 1 && computador == 3) || 
                   (jogador == 2 && computador == 1) || 
                   (jogador == 3 && computador == 2)) {
            printf("Voce venceu!\n");
            vitoriasJogador++;
        } else {
            printf("Computador venceu!\n");
            vitoriasComputador++;
        }


        printf("Vitorias do jogador: %d\n", vitoriasJogador);
        printf("Vitorias do computador: %d\n", vitoriasComputador);
    }

    return 0;
}