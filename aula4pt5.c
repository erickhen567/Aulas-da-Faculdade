#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main () {
    int aleatorio;

    srand(time(NULL));

    aleatorio = rand();

    printf("\n o numero sorteado e: %d", aleatorio);

    if ((aleatorio < 10000) ||  (aleatorio > 20000)) {
        printf("\n Voce e sortudo");
    } else {
       printf("\n Voce se fudeu");
    }

    return 0;
}