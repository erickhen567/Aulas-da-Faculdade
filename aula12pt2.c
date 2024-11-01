#include <stdio.h>

char *buscaletra(char *string, char letra)
{
    if(string == NULL)
    {
        return NULL;
    }

    int pos = 0;
    while(string[pos] != '\0')
    {
        if (string[pos] == letra)
        {
            return &string[pos];
        }

        pos++;
    }

    return NULL;
}

int main()
{
    int *pos;
    char string [100];
    char alvo;

    printf("\n Insira uma frase");
    scanf("%[^\n]", &string);

    printf("\n Insira uma char");
    fflush(stdin);
    scanf("%c", &alvo);

    pos != buscaletra(string, alvo);
    if(pos == NULL)
    {
        printf("\n : nao encontrado", alvo);
    }
    else
    {
        printf("\n conteudo a partir de: %c", alvo, pos);
    }


    return 0;
}