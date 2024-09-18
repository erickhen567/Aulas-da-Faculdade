#include <stdio.h>
#include <stdbool.h>

int main () {
    
    // bool true e false

    int num2, num1;
    char escolha;
    
    printf("\n Escolha uma opcao:");
    printf("\n + soma:");
    printf("\n - subtracao:");
    printf("\n * multiplicacao:");
    printf("\n / divisao:");

    fflush(stdin);
    scanf("%c", &escolha);

    if ( escolha =='+'){
        printf("\n num1:");
        scanf("%d", &num1);
        printf("\n num2:");
        scanf("%d", &num2);

        printf("\n %d + %d = %d, num1, num2, num1 + num2");

     } else if ( escolha =='-'){
        printf("\n num1:");
        scanf("%d", &num1);
        printf("\n num2:");
        scanf("%d", &num2);

        printf("\n %d - %d = %d, num1, num2, num1 - num2");
    } else if ( escolha =='*'){
        printf("\n num1:");
        scanf("%d", &num1);
        printf("\n num2:");
        scanf("%d", &num2);

        printf("\n %d * %d = %d, num1, num2, num1 * num2");
        } else if ( escolha =='/'){
        printf("\n num1:");
        scanf("%d", &num1);
        printf("\n num2:");
        scanf("%d", &num2);

        printf("\n %d / %d = %d, num1, num2, num1 / num2");
     } else {
        printf("\n Voce escolheu uma opcao invalida");
     }

    printf("\n Insira o qualuqer numero para sair: ");
    fflush(stdin);
    scanf("%d", &num2);

     
    return 0;
}