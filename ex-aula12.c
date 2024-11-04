#include <stdio.h>

void encontra_menor_maior(float *vetor, int tamanho, float *maior, float *menor) {
    *maior = vetor[0];
    *menor = vetor[0];

    for (int i = 1; i < tamanho; i++) {
        if (vetor[i] > *maior) {
            *maior = vetor[i];
        }
        if (vetor[i] < *menor) {
            *menor = vetor[i];
        }
    }
}

int main() {
    float valores[5];
    float maior, menor;

    printf("Digite 5 valores:\n");
    for (int i = 0; i < 5; i++) {
        printf("Valor %d: ", i + 1);
        scanf("%f", &valores[i]);
    }

    encontra_menor_maior(valores, 5, &maior, &menor);

    printf("Maior valor: %.2f\n", maior);
    printf("Menor valor: %.2f\n", menor);

    return 0;
}
