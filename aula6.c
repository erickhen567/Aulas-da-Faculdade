#include <stdio.h>
#include <string.h>

#define QUANTIDADE_DE_CADASTROS (15)

int main()
{
    int idade[QUANTIDADE_DE_CADASTROS] = {0};
    char nome[QUANTIDADE_DE_CADASTROS][100];
    float altura[QUANTIDADE_DE_CADASTROS] = {0};
    double massa[QUANTIDADE_DE_CADASTROS] = {0};

    int id;

    for (id = 0; id < QUANTIDADE_DE_CADASTROS; id++)
    {
        strcpy(nome[id], "nao inicializado");
    }

    while (1)
    {
       do
 {
            printf("\n Escolha usuario [0 - %d]: ", QUANTIDADE_DE_CADASTROS-1);
            scanf("%d", &id);
            printf("\n voce escolheu %d", id);
        } while ( (id < 0) || (id > QUANTIDADE_DE_CADASTROS) );

        printf("\n Insira as informacoes do usuario 0");
        printf("\n Nome: ");
        scanf("%s", nome[id]);

        printf("\n Idade: ");
        scanf("%d", &idade[id]);

        printf("\n Altura: ");
        scanf("%f", &altura[id]);

        printf("\n Massa corporal: ");
        scanf("%lf", &massa[id]);

        for (id = 0; id < QUANTIDADE_DE_CADASTROS; id++)
        {
            printf("\n Usuario %d:", id);
            printf("\n   Nome: %s", nome[id]);
            printf("\n   Idade: %d", idade[id]);
            printf("\n   Altura: %f", altura[id]);
            printf("\n   Massa corporal: %lf", massa[id]);
        }
    }

    return 0;
}