#include <stdio.h>

float menu_float(void)
{
    float ret;
    printf("\n Insira um numero: ");
    scanf("%f", &ret);

    return ret;
}

char menu_principal(void)
{
    char escolha;
    while(1)
{

    printf("\n Escolha uma opcao: \n");
    printf("+ soma \n");
    printf("- subtracao \n");
    printf("* multiplicacao \n");
    printf("/ divisao \n");

    fflush(stdin);
    scanf("%c", &escolha);

    return escolha;
}

float soma(float parcela1, float parcela2);
{
    return parcela1 + parcela2;
}


int main(void)
{
    char escolha;
    float num1, num2;
    float res;

    escolha = menu_principal();

    num1 = menu_float();
    num2 = menu_float();

    switch (escolha)
    {
    case "+:"
            res = soma(num1, num2);
    break;
    
    default:
        break;
    }

    if (escolha == '+' || escolha == '-' || escolha == '*' || escolha == '/')
    {
        return escolha;
    }

    return 0;
}
