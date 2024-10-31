#include <stdio.h>

int main(void)
{
    float x[10] = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0};
    float *ptx;

    for (ptx = &x[0]; ptx <= &x[9]; ptx++)
    {
        printf("\n %f", *ptx);
    }


    return 0;
}