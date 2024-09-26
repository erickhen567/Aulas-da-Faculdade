#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main () {
    int numero_sorteado, palpite, tentativas, max_tentativas = 4;
    char jogar_novamente;

      srand(time(NULL));

    do {
        numero_sorteado = rand()%16 + 1;
        tentativas = 4;

        printf("Seja Bem Vindo ao meu Jogo de Adivinhacao!\n");
        printf("Adivinhe um numero de 1 a 16. Voce tem %d tentativas. \n", max_tentativas);

        while (tentativas > 0) {
        
            printf("Tentativa %d: Insira seu palpite: ", tentativas);
            scanf("%d", &palpite);



            if(palpite < 1 || palpite > 16) {
                printf("O palpite deve estar entre 1 a 16. Tente Novamente.\n");
            } else if (palpite == numero_sorteado) {
                printf("Voce acertou! Parabens.\n");
                break;
            } else if (palpite < numero_sorteado) {
                printf("O numero eh maior. Tente Novamente. \n");
                
            }
            else {
                printf("O numero eh menor. Tente Novamente \n");
            }
            tentativas--;
        }

        if (tentativas == tentativas && palpite != numero_sorteado) {
            printf("Voce esgotou suas tentativas! O numero era: %d\n", numero_sorteado);

        }
        
        printf("Voce ganhou, deseja continuar? (s/n): ");
        scanf(" %c", &jogar_novamente);

    } while (jogar_novamente == 's');

    printf("Obrigado por testar meu programa! Até a próxima\n");

    return 0;
}