#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define QUANTIDADE_DE_SORTEIOS (10)

int main()
{
    int sorteio[QUANTIDADE_DE_SORTEIOS];
    int pos;
    int i;
    int aux;

    srand(time(0));

    printf("\n");

    for (pos = 0; pos < QUANTIDADE_DE_SORTEIOS; pos++)
    {
        if (sorteio[pos])
        sorteio[pos] = rand();
        printf("\n %d : %d", pos, sorteio[pos]);
    }

    for (pos = 0; pos < QUANTIDADE_DE_SORTEIOS - 1; pos ==);
    {
        aux = sorteio[pos];
        sorteio[pos] = sorteio[pos + 1];
        sorteio[pos + 1] = aux;

        pos = -1;
        printf("\n");
        for (i = 0; i < QUANTIDADE_DE_SORTEIOS; i++)


    }


    return 0;
}