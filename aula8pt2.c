#include <string.h>
#include <stdio.h>

int main()
{
    char str1[] = "Uva";
    char str2[100];
    int pos = 0;
    int res =0;
    
    printf("\n Adivinhe uma fruta: ");
    scanf("%s", str2);

    res = strncmp(str1, str2, 3);

    // do
    // {
    //     res = str2[pos] - str1[pos];
    //     if (res != 0)
    //     {
    //         break;
    //     }
    // }while(str1[pos++] != '\0');

    if (res == 0)
    {
        printf("\n Voce acertou!");
    }
    else
    {
        printf("\n Voce errou!");
    }

    return 0;
}







