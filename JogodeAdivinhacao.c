#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main () {
    int aleatorio;


    srand(time(NULL));

    for (i = 0; i < 4; i++)
{
        prinft("\n %d", i);
}
// 
    aleatorio = rand()%17;

    printf("\n O numero sorteado eh: %d", aleatorio);

    if (aleatorio) 
    {
        printf("Voce acertou!!!");
    }
    if else
    {
       printf("O numero eh >");
    
    if else
    {
       printf("O numero eh <")
    }
    printf("Voce ganhou, deseja continuar? Tecle X para continuar ou 0 para finalizar: ")
    printf("Voce perdeu, deseja continuar? Tecle Y para continuar ou 1 para finalizar: ")

    return 0;
}