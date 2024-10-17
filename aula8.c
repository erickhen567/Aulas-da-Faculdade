#include <stdio.h>
#include <string.h>

int main()
{
    char original[100] = {'m', 'a', 'g', 'a', 'l'};
    int pos = 0;

    pos = strnlen(original, sizeof(original));

//    while(original[pos] != '\0' && pos < sizeof(original))
//    {
//        pos++;
//    }


    printf("\n A string tem %d caracteres", pos);

}