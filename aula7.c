#include <stdio.h>
#include <string.h>

int main()
{
    char original[] = "Universidade Catolica de Brasilia";
    char copia[34];
    int pos = 0;


    while(original[pos] != '\0')
    {
        copia[pos] = original[pos];
        pos++;
 
    }

    copia[pos] = '\0';

    printf("\n copia: %s", copia);

    return 0;

}