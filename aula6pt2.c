#include <stdio.h>


#define QUANTIDADE_DE_NOTAS (3)

int main()
{
    int notas[QUANTIDADE_DE_NOTAS];
    float pesos[QUANTIDADE_DE_NOTAS];

    float soma;
    int i;

    for (i = 0; i < QUANTIDADE_DE_NOTAS; i++)
    {
        printf("\n Insira a nota %d", i + 1);
        scanf("%f", &notas[i]);

        printf("\n Insira a peso %d", i + 1);
        scanf("%f", &pesos[i]);
    }

    soma = 0.0;

    for (i = 0; i < QUANTIDADE_DE_NOTAS; i++)
    {
        soma += notas [i]*pesos[i];

    }

    printf("\n A soma ponderada eh %f", soma);
    printf("\n a media ponderada eh %f", soma/QUANTIDADE_DE_NOTAS);
    
    return 0;
}