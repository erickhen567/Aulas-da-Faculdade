#include <stdio.h>

#define MARCA_LEN  30
#define MODELO_LEN 10
#define VIDEO_LEN 10


struct notebook_t
{
    char marca[MARCA_LEN];
    char modelo[MODELO_LEN];
    int quantidade;
    float preco;
    int RAMGB;
    int HDGB;
    int TELA;
    char video[VIDEO_LEN];
};

int main()
{
    struct notebook_t note[1000];
    int i;
    for (i = 0; i < 1000; i++)
    {
        printf("\n Cadastre o note %d", i);
            
        printf("\n\tMarca:");
        scanf("%s", note[i].marca);

        printf("\n\tModelo:");
        scanf("%s", note[i].modelo);
        
        printf("\n\tRAM (GB):");
        scanf("%d", &note[i].RAMGB);

        printf("\n\tHD (GB):");
        scanf("%d", &note[i].HDGB);

        printf("\n\tTELA (pol):");
        scanf("%d", &note[i].TELA);

        printf("\n\tplaca de video:");
        scanf("%s", note[i].video);

        printf("\n\tquantidade:");
        scanf("%d", &note[i].quantidade);

        printf("\n\tcusto:");
        scanf("%f", &note[i].preco);
    }
    
    return 0;
}