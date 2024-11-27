#include <stdio.h>
#include <string.h>


typedef enum opcao_t opcao_t;
typedef struct pessoa_t pessoa_t;

enum opcao_t
{
    CADASTRAR = 0,
    PESQUISAR,
    DELETAR,
    SAIR,

    NUM_DE_OP, // Nao corresponde a uma operacao, 
               // apenas indica o numero de operacoes
};

struct pessoa_t
{
    char nome[100];
    char end[100];
    int idade;
};

char * menu[NUM_DE_OP] = {
    "Cadastrar",
    "Pesquisar",
    "Deletar",
    "Sair"
};


int main()
{
    opcao_t op;
    pessoa_t pessoa[1000];
    char pesquisa[100];
    int qtd = 0;
    int i;

    do
    {
        printf("\n Opcoes: ");

        for (op = 0; op < NUM_DE_OP; op++)
        {
            printf("\n\t %d - %s", op, menu[op]);
        }

        fflush(stdin);
        scanf("%d", &op);

        switch (op)
        {
            case CADASTRAR:
                fflush(stdin);
                printf("\n Digite o nome: ");
                fgets(pessoa[qtd].nome, 100, stdin);

                printf("\n Digite o endereco: ");
                fgets(pessoa[qtd].end, 100, stdin);

                printf("\n Digite a idade: ");
                scanf("%d", &pessoa[qtd].idade);

                qtd++;
                printf("\n Existem %d cadastros feitos", qtd);
            break;

            case PESQUISAR:
                printf("\n Qual nome voce quer pesquisar?");
                fgets(pesquisa, 100, stdin);

                for (i = 0; i < qtd; i++)
                {
                    if (strcmp(pessoa[i].nome, pesquisa) == 0)
                    {
                        printf("\n Nome: %s", pessoa[i].nome);
                        printf("\n Endereco: %s", pessoa[i].end);
                        printf("\n Idade: %d", pessoa[i].idade);
                    }
                }
            break;

            case DELETAR:
                printf("\n Deletar");
            break;

            case SAIR:
                printf("\n Sair");
            break;

            default:
                printf("\n Opcao invalida");
            break;
        }

    } while (op != SAIR);
    
    return 0;
}