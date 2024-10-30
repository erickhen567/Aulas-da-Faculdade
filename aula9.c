#include <stdio.h>
#include <string.h>

#define USUARIO 100
#define MAX_NOME_LEN 120
#define MAX_END_LEN 100


char nome[USUARIO][MAX_NOME_LEN];
char endereco[USUARIO][MAX_END_LEN];
int idade[USUARIO];
int matricula[USUARIO];
int contador = 0; 


void cadastrar() {
    if (contador >= USUARIO) {
        printf("\nMemoria Insuficiente! Nao e possivel fazer o cadastro de mais usuarios.\n");
        return;
    }

    printf("\nInsira o Nome Completo: ");
    scanf(" %[^\n]", nome[contador]); 

    printf("Insira o Endereco Completo: ");
    scanf(" %[^\n]", endereco[contador]);

    printf("Insira a Idade: ");
    scanf("%d", &idade[contador]);

    matricula[contador] = contador; 
    printf("Cadastro realizado com sucesso! Matricula: %d\n", matricula[contador]);
    contador++; 
}


void consultar() {
    char pesquisa[MAX_NOME_LEN];
    int encontrado = 0;

    printf("\nInsira o nome para consulta: ");
    scanf(" %[^\n]", pesquisa);

    for (int i = 0; i < contador; i++) {
        if (strcmp(pesquisa, nome[i]) == 0) {
            printf("\nNome: %s", nome[i]);
            printf("\nEndereco: %s", endereco[i]);
            printf("\nIdade: %d", idade[i]);
            printf("\nMatricula: %d\n", matricula[i]);
            encontrado = 1;
            break;
        }
    }

    if (!encontrado) {
        printf("\nPessoa nao encontrada.\n");
    }
}

int main() {
    char operacao;

    do {
        printf("\nEscolha uma das opcoes:");
        printf("\nc : Cadastro");
        printf("\nr : Consulta");
        printf("\ne : Sair\n");
        printf("Opcao: ");
        scanf(" %c", &operacao);  

        switch (operacao) {
            case 'c':
                cadastrar();
                break;

            case 'r':
                consultar();
                break;

            case 'e':
                printf("\nSaindo do programa.\n");
                break;

            default:
                printf("\nOpcao invalida.\n");
        }

    } while (operacao != 'e');

    return 0;
}
