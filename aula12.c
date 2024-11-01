#include <stdio.h>

void divisao(int divisor, int dividendo, int *quociente, int *resto)
{
    if (quociente != NULL)
    {
        *quociente = dividendo/divisor;
    }

    if (resto != NULL)
    {
        *resto = dividendo%divisor;
    }
}

int main()
{
    int v1, v2;
    int q, r;

    printf("\n Insira o dividendo: ");
    scanf("%d", &v1);

    printf("\n Insira o divisor: ");
    scanf("%d", &v2);

    divisao(v2, v1, &q, &r);

    printf("\n %d / %d = %d e sobra %d", v1, v2, q, r);

return 0;
}