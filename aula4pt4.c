#include <stdio.h>
#include <stdbool.h>

int main () {
    int idade;

    printf("Insira sua idade:");
    scanf("%d", &idade);

    if (idade <= 0) {
        printf("\n Dado Invalido");
        return -1;
    }

    if ((idade > 1) && (idade < 18)) {
        printf("\n Voce nao tem idade para usar esse servico");
    } else {
        printf("\n Acesso liberado!");
    }
    }