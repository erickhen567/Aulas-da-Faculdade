#include <stdio.h>
#include <string.h>

int main()
{
    int idade;
    char info[15];
    char nome[100];
    int tamanho;

    printf("\n Qual sua idade?\n");
    scanf("%d", &idade);


    printf("\n Qual seu nome?");
    fflush(stdin);
    scanf("%[^\n]", &nome);

    tamanho = snprintf(info, sizeof(info), "\n %s tem %d anos", nome, idade);
    printf("\n %s", info);
    if (strnlen(info) < tamanho)
    {
        printf("\n Ishi! Faltou memoria para copiar tudo");
    }

return 0;

}