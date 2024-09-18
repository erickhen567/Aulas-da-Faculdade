#include <stdio.h>

int main () {
    
    // bool true e false

    int num1, num2, resto;
    float div;

    printf("\n Insira dois numeos inteiros: ");
    scanf("%f", &num1);
    scanf("%d", &num2);
    

    div = num1 / num2; // 5/2 = 2
    resto = num1 % num2; // 5%2 = 1

    // 5 2 = 2 e sobra 1
    printf("%d / %d e sobra %d", num1, num2, div, resto);

    printf("Entre qualquer coisa para fechar");
    scanf("%d", &num1);

    return 0;
}