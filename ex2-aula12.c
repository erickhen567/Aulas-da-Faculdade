#include <stdio.h>

float menu_float(void);
int menu_int(void);
char menu_princpial(void);

float soma(float parcela1, float parcela2);
float sub(float parcela1, float parcela2);
float mul(float parcela1, float parcela2);
float div(float parcela1, float parcela2);
float potencia(float base, int expoente);

int main(void)
{
    char op;
    float num1, num2;
    int int1;
    float res;
    
    op = menu_princpial();

    num1 = menu_float();

    switch (op)
    {
        case '+':
            num2 = menu_float();
            res = soma(num1, num2);
            printf("\n %f %c %f = %f", num1, op, num2, res);
        break;

        case '-':
            num2 = menu_float();
            res = sub(num1, num2);
            printf("\n %f %c %f = %f", num1, op, num2, res);
        break;

        case '*':
            num2 = menu_float();
            res = mul(num1, num2);
            printf("\n %f %c %f = %f", num1, op, num2, res);
        break;

        case '/':
            num2 = menu_float();
            res = div(num1, num2);
            printf("\n %f %c %f = %f", num1, op, num2, res);
        break;

        case 'p':
            int1 = menu_int();
            res = potencia(num1, int1);
            printf("\n %f elevada a %d = %f", num1, int1, res);
        break;
    }

    return 0;
}

float soma(float parcela1, float parcela2)
{
    return parcela1 + parcela2;
}


float menu_float(void)
{
    float ret;
    printf("\n Insira um numero: ");
    fflush(stdin);
    scanf("%f", &ret);

    return ret;
}

int menu_int(void)
{
    int ret;
    printf("\n Insira um numero inteiro: ");
    fflush(stdin);
    scanf("%d", &ret);

    return ret;
}

char menu_princpial(void)
{
    char op;   
    while (1)
    {
        printf("\n op uma opcao: \n");
        printf("+ soma \n");
        printf("- subtracao \n");
        printf("* multiplicacao \n");
        printf("/ divisao \n");
        printf("p potencia \n");
        fflush(stdin);
        scanf("%c", &op);

        if (op == '-' || op == '+' || op == '*' || op == '/' || op == 'p')
        {
            return op;
        }
        
        printf("\n op invalida");
    }
}

float sub(float parcela1, float parcela2)
{
    return parcela1 - parcela2;
}

float mul(float parcela1, float parcela2)
{
    return parcela1 * parcela2;
}

float div(float parcela1, float parcela2)
{
    return parcela1 / parcela2;
}

float potencia(float base, int expoente)
{
    float res;
    int i = 0;

    if (base == 0)
    {
        return 0.0;
    }

    res = 1.0;

    if (expoente >= 0)
    {
        for (i = 0; i < expoente; i++)
        {
            res *= base;
        }
    }
    else
    {
        expoente = -expoente;
        for (i = 0; i < expoente; i++)
        {
            res /= base;
        }
    }

    return 0;
}
