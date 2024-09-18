#include <stdio.h>
#include <stdbool.h>

int main () {
    
    // bool true e false

    int num2, num1, resto;
    
    printf("\n Insira o primeiro: ");
    scanf("%d", &num1);
    printf("\n Insira o segundo: ");
    scanf("%d", &num2);

    if ( num1 > num2 ) {
        printf("\n %d e maior do que %d", num1, num2);
        printf("\n Fim");
     } else {
        printf("\n %d e maior ou igual do que %d", num2, num1);
        printf("\n Final");
        scanf("\n Aperte qualquer tecla para fechar");
     }

    printf("\n Insira o qualuqer numero para sair: ");
    scanf("%d", &num2);


    return 0;
}