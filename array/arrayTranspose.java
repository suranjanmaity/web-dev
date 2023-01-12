package array;
// import java.util.Scanner;

/**
 * array transpose
 */
public class arrayTranspose {
    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        // hardcore input
        int[][] arr= {  {5, 8, 4},
                        {6, 1, 5},
                        {8, 5, 9},
                        {7, 2, 5},
                        {5, 6, 7}};
        // for input from user
        // for(int r=0;r<5;r++){
        //     for(int c=0;c<3;c++){
        //         arr[r][c] = sc.nextInt();
        //     }
        // }

        System.out.println("input");
        for(int r=0;r<5;r++){
            for(int c=0;c<3;c++){
                System.out.print(arr[r][c]+" ");
            }
            System.out.println();
        }

        System.out.println("output");
        for(int c=0;c<3;c++){
            for(int r=0;r<5;r++){
                System.out.print(arr[r][c]+" ");
            }
            System.out.println();
        }
        
    }
}
